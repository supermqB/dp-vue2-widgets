<template>
  <div class="elegrp_wrapper">
    <div class="title">数据元</div>
    <div class="search_container">
      <el-input
        placeholder="请搜索"
        suffix-icon="el-icon-search"
        :value="search"
        @input="setSearch"
        clearable
      >
      </el-input>
    </div>
    <div class="grouptree">
      <el-tree
        :data="grouptree"
        :filter-node-method="filterTreeNode"
        show-checkbox
        node-key="ctlgIdentifier"
        :props="{ children: 'directoryList', label: 'ctlgName' }"
        :default-expanded-keys="['0']"
        ref="grouptree"
        @check-change="checkedGrpChangeHandler"
      >
      </el-tree>
    </div>
    <div class="groupsum">
      <div v-for="item in groupSum" :key="item.key">
        {{ item.key }} : {{ item.value }}
      </div>
    </div>
  </div>
</template>
<script>
import { debounce } from 'lodash'
import { createNamespacedHelpers, mapActions as globalMapActions } from 'vuex'
const elemGrpLabelName = 'ctlgName'
const { mapState, mapMutations, mapActions } =
  createNamespacedHelpers('dataElem/elemGroup')

export default {
  computed: {
    ...mapState({
      search: state => state.search,
      groupSum: state => state.groupSum,
      grouptree: state => state.grouptree
    })
  },
  watch: {
    search(val) {
      this.$refs.grouptree.filter(val)
    }
  },
  methods: {
    filterTreeNode(value, data) {
      if (!value) return true
      return data[elemGrpLabelName].indexOf(value) !== -1
    },
    checkedGrpChangeHandler() {
      let checkedKeys = this.$refs.grouptree.getCheckedKeys()
      this.setSelectedGrps(checkedKeys)
      this.lazyListElements()
    },
    ...mapMutations(['setSearch', 'setSelectedGrps']),
    ...mapActions(['fetchElementGrps']),
    ...globalMapActions('dataElem/elemList', { listElements: 'search' })
  },
  mounted() {
    this.fetchElementGrps()
    this.$refs.grouptree.setCheckedKeys(['0'])
    this.lazyListElements = debounce(() => {
      this.listElements()
    }, 500)
  }
}
</script>
<style lang="scss" scoped>
::v-deep.elegrp_wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.65);
    padding: 6px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  .search_container {
    height: 28px;
    padding: 6px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
  .grouptree {
    flex-grow: 1;
    .el-tree-node__content {
      height: 36px;
    }
  }
  .groupsum {
    font-size: 13px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 29px;
    border-top: 1px solid #e5e5e5;
  }
}
</style>
