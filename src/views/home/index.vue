<template>
  <div class="homePageWrap" ref="homePageWrap">
    <div class="header">
      <Breadcrumb baseLabel="首页"></Breadcrumb>
      <div class="badge">
        <el-badge :value="100" :max="99">
          <img :src="TaskIcon" @click="taskManagementOpen" class="taskManagement"/>
        </el-badge>
        <el-badge :value="12">
          <img :src="LogIcon" @click="logOpen" class="taskManagement"/>
        </el-badge>
      </div>
    </div>
    <div v-if="showCard === '' ">
      <div class="summary" >
        <Summary :list="summaryList"></Summary>
      </div>
      <div class="detail">
        <div class="components">
          <component
            v-for="item in summaryComponentList"
            :ref="item.component"
            :key="item.component"
            :is="item.component"></component>
        </div>
        <el-tabs v-model="activeComponent" tab-position="right" @tab-click="handleClick">
          <el-tab-pane v-for="(item, key) in summaryComponentList"
            :key="key"
            :name="item.component"
            :label="item.label">
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <TaskManagement v-if="showCard === 'taskManagement' " :showCard.sync = 'showCard'></TaskManagement>
    <Log v-if="showCard === 'log' " :showCard.sync=" showCard "></Log>
  </div>
</template>

<script>
  import Bwd from './component/bwd.vue'
  import DataElement from './component/dataElement.vue'
  import Docs from './component/docs.vue'
  import Event from './component/event.vue'
  import Mdm from './component/mdm.vue'
  import Value from './component/value.vue'
  import Breadcrumb from '@/components/header/Breadcrumb.vue'
  import Summary from './component/summary.vue'
  import { summaryList, summaryComponentList } from './config'
  import TaskIcon from '@/assets/images/home/task.svg'
  import LogIcon from '@/assets/images/home/log.svg'
  import TaskManagement from './component/taskManagement.vue'
  import Log from './component/log.vue'
  export default {
    components: {
      Bwd, DataElement, Docs, Event, Mdm, Value, 
      Breadcrumb, Summary, TaskManagement, Log
    },
    data() {
      return {
        summaryComponentList,
        summaryList,
        activeComponent: summaryComponentList[0].component,
        showCard:''
      }
    },
    created() {
      this.TaskIcon = TaskIcon
      this.LogIcon = LogIcon
    },
    methods:{
      taskManagementOpen(){
        this.showCard = 'taskManagement'
      },
       handleClick(tab) {
        let main = document.querySelector('.el-main')
        let component = summaryList[tab.index].name
        let box = document.querySelector(`.${component}`)
        main.scrollTop = box.offsetTop +200
      },
      logOpen(){
        this.showCard = 'log'
      },
      isSelected(){
         let main = document.querySelector('.el-main')
         for (let i = 0; i < summaryComponentList.length; i++) {
           if(main.scrollTop > document.querySelector(`.${summaryList[i].name}`).offsetTop - 200) {
             for (let i = 0; i < summaryComponentList.length; i++) {
              document.getElementById(`tab-${summaryComponentList[i].component}`).classList.remove('is-active')
            }
            document.getElementById(`tab-${summaryComponentList[i].component}`).classList.add('is-active')
            document.querySelector('.el-tabs__active-bar').style.transform = `translateY(${40 *i}px)`
          }
        }
      }
    },
    mounted(){
      document.querySelector('.el-main').addEventListener('scroll',() => {
        this.isSelected()
      })
    }
  }


</script>

<style scoped lang="scss">

.homePageWrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    height: 41px;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
    padding: 0 10px;
    box-sizing: border-box;
    align-items: center;
    border-bottom: 1px solid #eee;
    .badge {
      width: 100px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        display: inline-block;
        width: 24px;
        height: 24px;
      }
      .el-badge {
        margin: 5px 12px 0 12px;
        ::v-deep .el-badge__content.is-fixed {
          top: 5px;
          right: 11px;
        }
      }
    }
  }
  .summary {
    margin: 0 20px;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
  }
  .detail {
    flex: 1;
    display: flex;
    flex-direction: row;
    position: relative;
    /* margin-right: 160px; */
    margin-top: 5px;
    overflow: auto;
    .components {
      width: 88%;
      height: 100%;
      box-sizing: border-box;
      overflow: auto;
    }
    ::v-deep .el-tabs {
      position: fixed;
      top: 270px;
      right: 0px; 
      width: 200px;
      height: 400px;
      /* margin-left: -5px; */
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
  }
  .taskManagement {
    cursor: pointer ;
  }
}

::-webkit-scrollbar {
  display: none; //兼容chrome
}
</style>
