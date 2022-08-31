<template>
  <div class="suspectWrap">
    <p class="listTitle">疑似列表</p>
    <!-- <el-select
      v-model="curTask"
      placeholder="选择疑似任务"
      style="width: 211px; margin: 4px 6px"
      v-if="currentVersionInfo.type === '多值字典'"
    >
      <el-option
        v-for="item in filteredTask"
        :key="`${item.source}:${item.name}`"
        :label="`${item.source}:${item.name}`"
        :value="`${item.source}:${item.name}`"
      >
        <span style="float: left">{{ item.name }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{
          item.source
        }}</span>
      </el-option>
    </el-select> -->
    <Table
      v-if="currentVersionInfo.type === '单值字典'"
      :tableData="suspectList"
      :tableConfig="config"
      :pageInfo="null"
      :isShowRadio="false"
      class="suspectTable">
    </Table>
    <div v-else-if="currentVersionInfo.type === '多值字典'">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item
          v-for="(suspect, index) in suspectList"
          :title="suspect.name || `*****${index+1}`"
          :name="index"
          :key="index"
          class="propList"
        >
          <div
            v-for="item in currentVersionInfo.valueDictColumnList"
            :key="`${item.id}${index}`"
            class="propItem"
          >
            <div class="title">【{{ item.nameCn }}】</div>
            <div class="content">{{ suspect[item.nameEn] }}</div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import Table from '@/components/GeneralTable.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('value')
const config = [
  {
    colConfig: {
      property: 'system',
      label: '系统',
      minWidth: 50
    }
  },{
    colConfig: {
      property: 'code',
      label: '代码',
      minWidth: 55
    }
  },{
    colConfig: {
      property: 'name',
      label: '名称',
      minWidth: 55
    }
  }
]
export default {
  components: {
    Table
  },
  computed: {
    ...mapState(['task', 'currentVersionInfo', 'dictValueList']),
    ...mapGetters(['filteredTask']),
    suspectList: function() {
      const res = this.filteredTask.reduce((x, y) => {
        return [...x, ...y.suspectList]
      }, [])
      return res.map(item => item.suspectObject)
    }
  },
  data() {
    return {
      config,
      curTask: '',
      activeName: 0
    }
  },
  methods: {
    ...mapMutations(['setSuspectList'])
  },
  watch: {
    suspectList: {
      handler(){
        // this.activeName = 0
      }
    },
    currentVersion: {
      handler(){
        this.setSuspectList()
      }
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep.suspectWrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  p.listTitle {
    margin-bottom:-1px;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.65);
    padding: 0 6px;
    border-bottom: 1px solid #e5e5e5;
  }
  .el-collapse-item__header {
    height: 36px;
    padding-left: 6px;
    &::before {
      height: 10px;
      width: 3px;
      background-color: #1890ff;
      content: '';
      margin-right: 5px;
      border-radius: 16px;
    }
  }
  .el-collapse-item__content {
    padding-bottom: 17px;
  }
  .propList {
    .propItem {
      .title {
        background: #eeeeee;
        margin: 6px;
      }
      .content {
        margin: 8px 6px 8px 14px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.65);
        line-height: 18px;
      }
    }
  }
}

.suspectTable {
  flex: 1;
}

</style>