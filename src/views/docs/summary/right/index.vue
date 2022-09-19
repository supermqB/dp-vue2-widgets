<template>
  <div class="wrap">
    <div class="header">相似文献</div>
    <el-input 
      v-model="name"
      placeholder="请输入"
      suffix-icon="el-icon-search"
      clearable />
    <ul>
      <li
        v-for="(item, index) in literatureFilterList"
        @click="selectLiterature(item)"
        :key="index"
      >
        <p>
          <span class="type">{{ item.docType }}</span>
          <span class="title">{{ item.title }}</span>
        </p>
        <p class="catalog">分类：{{ item.catalogGrp }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('docs/summary')
export default {
  computed: {
    ...mapState(['filter']),
    ...mapGetters(['literatureFilterList']),
    name: {
      get() {
        return this.filter
      },
      set(value) {
        this.setFilter(value)
      }
    },
  },
  methods: {
    ...mapMutations(['setID', 'setFilter']),
    ...mapActions(['queryLiterature', 'getSimilarLiteratureList']),
    async selectLiterature({ id }) {
      this.setFilter()
      this.setID(id)
      await this.queryLiterature()
      // this.getSimilarLiteratureList()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  margin-bottom: 8px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.65);
  padding: 0 6px;
  border-bottom: 1px solid #e5e5e5;
}
.el-input {
  width: calc(100% - 10px);
  margin: 0 5px;
}
ul {
  flex: 1;
  overflow: auto;
  margin: 8px 5px 0 5px;
  border: 1px solid #F2F2F2;
  li {
    padding: 8px 6px 8px 8px;
    font-size: 15px;
    cursor: pointer;
    border-bottom: 1px solid #F2F2F2;
    p {
      padding: 5px 0;
      display: flex;
      align-items: center;
    }
    .type {
      padding: 3px 6px;
      margin-right: 5px;
      text-align: center;
      font-size: 12px;
      line-height: 14px;
      background-color: #1890FF;
      border-radius: 2px;
      color: #fff;
      display: inline-block;
      white-space: nowrap;
    }
    .title {
      @include ellipsisNoWrap();
      font-size: 13px;
      font-weight: bold;
    }
    .catalog {
      @include ellipsisNoWrap();
      font-size: 12px;
      color: rgba(0,0,0,0.45);
    }
  }
  li:nth-child(2) {
    background-color: #FAFAFA;
  }
  li:last-child {
    border-bottom: 0;
  }
}
</style>