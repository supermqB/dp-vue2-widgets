<template>
  <dp-layout-container>
    <template #main>
      <div class="docWrap">
        <vue-particles v-bind="config" class="particles"></vue-particles>
        <div class="header">
          <Breadcrumb baseLabel="文献库" currentLabel="文献检索"></Breadcrumb>
        </div>
        <div class="content">
          <h1>
            <img src="@/assets/images/common/logo.png" />
            <span>联仁文库</span>
          </h1>
          <ul class="type">
            <li v-for="(name, index) in typeList" :key="index">
              {{ name }}
            </li>
          </ul>
          <div class="search">
            <el-input
              placeholder="请输入内容"
              v-model="searchContent"
              class="searchOnece"
            ></el-input>
            <el-button slot="append" type="primary" class="onece"
              >搜索一下</el-button
            >
            <el-button type="text" class="advance">高级搜索</el-button>
          </div>

          <div class="hotSearch">
            <span>热搜:</span>
            <p v-for="(name, index) in hotSearch" :key="index" class="item">
              {{ name }}
            </p>
          </div>
        </div>
      </div>
    </template>
  </dp-layout-container>
</template>

<script>
import config from './particlesjs-config.json'
import Breadcrumb from '@/components/header/Breadcrumb.vue'
export default {
  components: {
    Breadcrumb
  },
  data() {
    return {
      config,
      searchContent: '',
      typeList: [
        '全部',
        '期刊文章',
        '研究报告',
        '指南共识',
        '政策规则',
        '标准',
        '成书',
        '其他'
      ],
      hotSearch: ['学术', '医学', '专著', '标准', '外科']
    }
  }
}
</script>

<style scoped lang="scss">
.docWrap {
  height: 100%;
  /* padding-bottom: 8%; */
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .particles {
    position: absolute;
    height: 99%;
    width: 100%;
  }
  .header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 41px;
    padding: 0 13px;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
  }
  .content {
    z-index: 100;
    width: 80%;
    max-width: 800px;
    padding-bottom: 10%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
h1 {
  margin-bottom: 20px;
  img {
    height: 50px;
    margin-right: 10px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-weight: normal;
  color: #002e53;
}
ul.type {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  li {
    padding: 0 10px;
    border-right: 1px solid rgba(0, 0, 0, 0.65);
    cursor: pointer;
  }
  li:first-child {
    padding-left: 0;
  }
  li:last-child {
    border-right: 0;
  }
}
.search {
  width: 100%;
  display: flex;
  position: relative;
  ::v-deep .el-input__inner {
    height: 45px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .searchOnece {
    height: 45px;
    border-radius: 10px;
  }
  .onece {
    padding: 0 16px;
    height: 45px;
    margin-left: -1px;
    font-size: 16px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .advance {
    position: absolute;
    top: 13px;
    right: -75px;
    font-size: 16px;
    text-decoration: underline;
  }
}
.hotSearch {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.45);
  .item {
    margin: 0 8px;

    padding: 4px 7px;
    display: inline-block;
    color: #1890ff;
    border-radius: 20px;
    background-color: rgba(24, 144, 255, 0.1);
    border: 1px solid rgba(24, 144, 255, 0.2);
  }
}
</style>
