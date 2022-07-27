<template>
  <div id="tags-view-container" class="tags-view-container">
    <scroll-pane
      ref="scrollPane"
      class="tags-view-wrapper"
      @scroll="handleScroll"
    >
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.path"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        tag="span"
        class="tags-view-item"
        :style="activeStyle(tag)"
        @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''"
      >
        <!-- :class="isActive(tag)?'active':''" -->
        <el-button plain :class="isActive(tag) ? 'active' : ''">
          {{ tag.title }}
          <span
            v-if="!isAffix(tag)"
            class="el-icon-close"
            @click.prevent.stop="closeSelectedTag(tag)"
          />
        </el-button>
        <!-- {{ tag.title }} -->
      </router-link>
    </scroll-pane>
    <!-- <ul
      v-show="visible"
      :style="{ left: left + 'px', top: top + 'px' }"
      class="contextmenu"
    >
      <li @click="refreshSelectedTag(selectedTag)">
        <i class="el-icon-refresh-right" /> 刷新页面
      </li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
        <i class="el-icon-close" /> 关闭当前
      </li>
      <li @click="closeOthersTags">
        <i class="el-icon-circle-close" /> 关闭其他
      </li>
      <li v-if="!isFirstView()" @click="closeLeftTags">
        <i class="el-icon-back" /> 关闭左侧
      </li>
      <li v-if="!isLastView()" @click="closeRightTags">
        <i class="el-icon-right" /> 关闭右侧
      </li>
      <li @click="closeAllTags(selectedTag)">
        <i class="el-icon-circle-close" /> 全部关闭
      </li>
    </ul> -->
  </div>
</template>

<script>
import ScrollPane from './ScrollPane'

export default {
  components: { ScrollPane },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: []
    }
  },
  computed: {
    visitedViews() {
      return this.$store.state.tags.visitedViews
    },
    routes() {
      return ['value', 'task', 'patient', 'medicine'] //this.$store.state.permission.routes
    },
    theme() {
      return {} // this.$store.state.settings.theme
    }
  },
  watch: {
    $route() {
      this.addTags()
      this.moveToCurrentTag()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    this.initTags()
    this.addTags()
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path
    },
    activeStyle(tag) {
      if (!this.isActive(tag)) return {}
      return {
        // 'background-color': this.theme,
        // 'border-color': this.theme
      }
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix
    },
    isFirstView() {
      try {
        return (
          this.selectedTag.fullPath === this.visitedViews[1].fullPath ||
          this.selectedTag.fullPath === '/index'
        )
      } catch (err) {
        return false
      }
    },
    isLastView() {
      try {
        return (
          this.selectedTag.fullPath ===
          this.visitedViews[this.visitedViews.length - 1].fullPath
        )
      } catch (err) {
        return false
      }
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    initTags() {
      const affixTags = (this.affixTags = this.filterAffixTags(this.routes))
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.$store.dispatch('tags/addVisitedView', tag)
        }
      }
    },
    addTags() {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tags/addView', this.$route)
      }
      return false
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag)
            // when query is different then update
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch('tags/updateVisitedView', this.$route)
            }
            break
          }
        }
      })
    },
    refreshSelectedTag(view) {
      this.$tab.refreshPage(view)
    },
    closeSelectedTag(view) {
      this.$tab.closePage(view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
        }
      })
    },
    closeRightTags() {
      this.$tab.closeRightPage(this.selectedTag).then(visitedViews => {
        if (!visitedViews.find(i => i.fullPath === this.$route.fullPath)) {
          this.toLastView(visitedViews)
        }
      })
    },
    closeLeftTags() {
      this.$tab.closeLeftPage(this.selectedTag).then(visitedViews => {
        if (!visitedViews.find(i => i.fullPath === this.$route.fullPath)) {
          this.toLastView(visitedViews)
        }
      })
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag).catch(() => {})
      this.$tab.closeOtherPage(this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    closeAllTags(view) {
      this.$tab.closeAllPage().then(({ visitedViews }) => {
        if (this.affixTags.some(tag => tag.path === this.$route.path)) {
          return
        }
        this.toLastView(visitedViews, view)
      })
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath })
        } else {
          this.$router.push('/')
        }
      }
    },
    openMenu(tag, e) {
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft + 15 // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = e.clientY
      this.visible = true
      this.selectedTag = tag
    },
    closeMenu() {
      this.visible = false
    },
    handleScroll() {
      this.closeMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  margin-top: -1px;
  height: 32px;
  width: 100%;
  background: #f7f7f7;
  // border-bottom: 1px solid #d8dce5;
  // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 32px;
      box-sizing: border-box;
      // line-height: 24px;
      // border: 1px solid rgba(226, 226, 226, 1);
      border: none;
      color: #333;
      background: #fff;
      font-size: 12px;
      // margin-left: 10px;
      // margin-top: 10px;
      &:first-of-type {
        // margin-left: 15px;
      }
      &:last-of-type {
        // margin-right: 15px;
      }
      // .active {
      //   background-color: #E4F5FA;
      //   color: #fff;
      //   border-color: rgba(1,171,229,1);
      //   // &::before {
      //   //   content: '';
      //   //   background: #fff;
      //   //   display: inline-block;
      //   //   width: 8px;
      //   //   height: 8px;
      //   //   border-radius: 50%;
      //   //   position: relative;
      //   //   margin-right: 2px;
      //   // }
      // }
      .el-button {
        width: 104px;
        height: 32px;
        padding: 0 8px;
        border: none;
        line-height: inherit;
        border-radius: 0;
        border-top: 1px solid #e2e2e2;
        border-right: 1px solid #e2e2e2;
        &:not(.active) {
          color: #333;
          background-color: transparent;
        }
        &:hover,
        &.active {
          color: #333;
          background-color: #f5f5f5;
        }
      }
    }
  }
  // .contextmenu {
  //   margin: 0;
  //   background: #fff;
  //   z-index: 3000;
  //   position: absolute;
  //   list-style-type: none;
  //   padding: 5px 0;
  //   border-radius: 4px;
  //   font-size: 12px;
  //   font-weight: 400;
  //   color: #333;
  //   box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  //   li {
  //     margin: 0;
  //     padding: 7px 16px;
  //     cursor: pointer;
  //     &:hover {
  //       background: #eee;
  //     }
  //   }
  // }
}
</style>

<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 8px;
      height: 8px;
      margin-left: 8px;
      vertical-align: 2px;
      // border-radius: 20%;

      // text-align: center;
      // transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      // transform-origin: 100% 50%;
      &:before {
        // transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      // &:hover {
      //   background-color: #b4bccc;
      //   color: #fff;
      // }
    }
  }
}
</style>
