<template>
  <div class="elegrp_wrapper">
    <div class="title">数据元</div>
    <div class="search_container">
      <el-input
        placeholder="请搜索"
        suffix-icon="el-icon-search"
        :value="search"
        @input="setSearch"
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
        :default-expanded-keys="['0', 'DE01', 'DE02', 'DE02.01']"
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
      this.listElements()
    },
    ...mapMutations(['setSearch', 'setSelectedGrps']),
    ...mapActions(['fetchElementGrps']),
    ...globalMapActions('dataElem/elemList', { listElements: 'search' })
  },
  mounted() {
    this.fetchElementGrps()
    this.$refs.grouptree.setCheckedKeys(['0'])
  }
}
</script>
<style lang="scss" scoped>
.elegrp_wrapper {
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
    height: 40px;
    padding: 6px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
  }
  .grouptree {
    flex-grow: 1;
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
