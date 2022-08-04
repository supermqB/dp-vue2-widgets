<template>
  <div class="wrap">
    <div class="header">
      <h3>值域目录</h3>
      <div class="buttons">
        <img :src="ADDICON" @click="addCatalog"/>
        <img :src="EDITICON" @click="editCatalog"/>
      </div>
    </div>
    <div class="search">
      <span>搜索</span>
      <el-input suffix-icon="el-icon-search"></el-input>
    </div>
    <div class="tree">
      <Tree
        :data="catalogs"
        currentNodeKey="2-1"></Tree>
    </div>
  </div>
</template>

<script>
import Tree from '@/components/Tree.vue'
import { EDITINGSTATE } from '@/utils/const'
const ADDICON = require("@/assets/images/event/add.png")
const EDITICON = require("@/assets/images/event/edit.png")
export default {
  components: {Tree},
  data() {
    return {
      catalogs: [
        {
          id: '1',
          label: '国家强制标准',
          children: [
            {
              id: '1-1',
              label:'DICT_SEX',
              state: EDITINGSTATE
            }, {
              id: '1-2',
              label:'DICT_RELIGION'
            }
          ]
        },{
          id: '2',
          label: '国家推荐标准',
          state: EDITINGSTATE,
          children: [
            {
              id: '2-1',
              label:'DICT_SEX',
              state: EDITINGSTATE
            }, {
              id: '2-2',
              label:'DICT_RELIGION',
              state: EDITINGSTATE
            }
          ]
        }
      ]
    }
  },
  created() {
    this.ADDICON = ADDICON
    this.EDITICON = EDITICON
  },
  methods: {
    addCatalog() {},
    editCatalog() {}
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  .header {
    height: 41px;
    padding: 0 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
    h3 {
      font-size: 16px;
      font-weight: normal;
    }
    .buttons {
      display: flex;
      justify-content: end;
      align-items: center;
      img {
        margin: 0 4px;
        cursor: pointer;
      }
    }
  }
  .search {
    height: 41px;
    padding: 0 7px 0 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
    span {
      display: inline-block;
      width: 50px;
      font-size: 14px;
    }
  }
  .tree {
    flex-grow: 1;
    padding-top: 5px;
    border-bottom: 1px solid #E5E5E5;
  }
}
</style>