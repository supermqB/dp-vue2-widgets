<template>
  <div class="suspect_list_wrapper">
    <div class="top_title">疑似列表</div>
    <el-select
      v-model="curTask"
      placeholder="选择疑似任务"
      style="width: 211px; margin: 4px 6px"
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
    </el-select>
    <div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item
          v-for="(suspect, index) in curSuspectList"
          :title="suspect.title"
          :name="'item' + index"
          :key="'item' + index"
          class="propList"
        >
          <div
            v-for="field in suspect.fields"
            :key="field.name"
            class="propItem"
          >
            <div class="title">【{{ field.name }}】</div>
            <div class="content">{{ field.value }}</div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
import { drugEnvolope } from './envelopeConfig'
import { camelCase } from 'lodash'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('mdm/tasks')
export default {
  data() {
    return {
      curTask: '',
      activeName: 'item0'
    }
  },
  watch: {
    filteredTask(tasks) {
      let firstTask = tasks[0]
      this.curTask = `${firstTask.source}:${firstTask.name}`
    },
    curTask(curTask) {
      this.setWorkingTask(
        this.filteredTask.filter(
          task => `${task.source}:${task.name}` == curTask
        )[0]
      )
    }
  },
  methods: {
    ...mapMutations(['setWorkingTask'])
  },
  computed: {
    ...mapGetters(['filteredTask']),
    curSuspectList() {
      let curTask = this.filteredTask.filter(
        task => `${task.source}:${task.name}` == this.curTask
      )
      let curSusList = curTask.length && curTask[0].suspectList
      return curSusList
        ? curSusList.map(sus => {
            return {
              title: curTask[0].name,
              fields: drugEnvolope.map(item => {
                return {
                  name: item.title,
                  value: item.props
                    .map(p => {
                      return p.f ? p.f(sus[camelCase(p.n)]) : sus[camelCase(p)]
                    })
                    .filter(v => v != null)
                    .join(',')
                }
              })
            }
          })
        : []
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep.suspect_list_wrapper {
  .top_title {
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
</style>
