<template>
  <el-row class="docWrap">
    <el-col :xs="2" :sm="3" :md="4" :lg="5" :xl="6"></el-col>
    <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="12">
      <h1>
        <img src="@/assets/images/common/logo.png" />
        <span>联仁文库</span>  
      </h1>
      <ul class="type">
        <li v-for="(name, index) in typeList"
          :key="index">
          {{ name }}
        </li>
      </ul>
      <el-input placeholder="请输入内容" v-model="searchContent">
        <el-button slot="append" type="primary"></el-button>
      </el-input>
      <div class="hotSearch">
        <span>热搜:</span>
        <p v-for="(name, index) in hotSearch"
          :key="index"
          class="item"
        >{{ name }}</p>
      </div>
    </el-col>
    <vue-particles v-bind="config"></vue-particles>
  </el-row>
</template>

<script>
// import VueParticles from 'vue-particles';
import config from './particlesjs-config.json'
export default {
  data() {
    return {
      config,
      searchContent: '',
      typeList: [
        '全部', '期刊文章', '研究报告'
      ],
      hotSearch: [
        '学术'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .docWrap {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    color: #002E53
  }
  ul.type {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: rgba(0,0,0,0.65);
    li {
      padding: 0 15px;
      border-right: 1px solid rgba(0,0,0,0.65);
    }
    li:first-child {
      padding-left: 0;
    }
    li:last-child {
      border-right: 0;
    }
  }
  .hotSearch {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 13px;
    color: rgba(0,0,0,0.45);
    .item {
      margin: 0 8px;
      
      padding: 4px 7px;
      display: inline-block;
      color: #1890FF;
      border-radius: 20px;
      background-color: rgba(24,144,255,0.1);
      border: 1px solid rgba(24,144,255,0.2);
    }
  }
</style>