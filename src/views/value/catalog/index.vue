<template>
  <div class="wrap">
    <Header
      title="值域目录"
      @add="addCatalog"
      @edit="editCatalog"
    ></Header>
    <div class="search">
      <span>搜索</span>
      <el-input suffix-icon="el-icon-search"></el-input>
    </div>
    <Tree
      :data="catalogs"
      currentNodeKey="2-1"
      class="tree"
    ></Tree>
    <Dialog 
      title="新增值域字典"
      ref="addCatalogDialog"
      class="addCatalogDialog"
    >
      <Form :formCfg="addCatalogCfg" :formData="addCatalogData"></Form>
    </Dialog>
    <Dialog
      title="编辑值域字典"
      ref="editCatalogDialog"
      class="editCatalogDialog"
    >
      <Form :formCfg="editCatalogCfg" :formData="editCatalogData"></Form>
    </Dialog>
  </div>
</template>

<script>
import Tree from '@/components/SideTree.vue'
import Dialog from '@/components/Dialog.vue'
import Form from '@/components/Form.vue'
import Header from '@/components/header/Catalog.vue'
import { addCatalogCfg, editCatalogCfg } from './config/catalogForm'
import { EDITINGSTATE } from '@/utils/const'

export default {
  components: {
    Tree, Dialog, Form, Header
  },
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
        },{
          id: '3',
          label: '国家推荐标准',
          state: EDITINGSTATE,
          children: [
            {
              id: '3-1',
              label:'DICT_SEX',
              state: EDITINGSTATE
            }, {
              id: '3-2',
              label:'DICT_RELIGION',
              state: EDITINGSTATE
            }
          ]
        },{
          id: '4',
          label: '国家推荐标准',
          state: EDITINGSTATE,
          children: [
            {
              id: '4-1',
              label:'DICT_SEX',
              state: EDITINGSTATE
            }, {
              id: '4-2',
              label:'DICT_RELIGION',
              state: EDITINGSTATE
            }
          ]
        },{
          id: '5',
          label: '国家推荐标准',
          state: EDITINGSTATE,
          children: [
            {
              id: '5-1',
              label:'DICT_SEX',
              state: EDITINGSTATE
            }, {
              id: '5-2',
              label:'DICT_RELIGION',
              state: EDITINGSTATE
            }
          ]
        }
      ],
      addCatalogCfg,
      editCatalogCfg,
      addCatalogData: {},
      editCatalogData: {}
    }
  },
  created() {
  },
  methods: {
    addCatalog() {
      this.$refs.addCatalogDialog.toggleOpen()
    },
    editCatalog() {
      this.$refs.editCatalogDialog.toggleOpen()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
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
    flex: 1;
    overflow: auto;
    padding-top: 5px;
    border-bottom: 1px solid #E5E5E5;
  }
}

::v-deep .addCatalogDialog .el-dialog{
  width: 810px;
  form {
    height: 400px;
    padding-left: 20px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    align-items: end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 16px;
    }
  }
}

::v-deep .editCatalogDialog .el-dialog{
  width: 500px;
  form {
    padding-right: 60px;
    display: flex;
    flex-direction: column;
    align-items: end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 12px;
    }
  }
}
</style>