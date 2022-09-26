<template>
  <div class="docs">
    <div class="head">
      <span>文献库</span>
    </div>
    <div class="contents">
      <div class="summarize boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>分类汇总</p>
        </div>
        <el-table
          border
          :data="tableData"
          :header-cell-style="{height:'27px',padding:'0 0 0 15px'}"
          :cell-style="{height:'27px',padding:'0 0 0 15px'}"
          style="width: 350px">
          <el-table-column prop="category" label="分类" width="259px">
            </el-table-column>
          <el-table-column prop="num" label="数量" width="90px">
            </el-table-column>
        </el-table>
      </div>
      <div class="proportion boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>分类占比</p>
        </div>
      </div>
      <div class="sum boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>文献总数 （万个）</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          category:'全部',
          num:999
        },{
          category:'全部',
          num:999
        },{
          category:'全部',
          num:999
        },{
          category:'全部',
          num:999
        },{
          category:'全部',
          num:999
        },{
          category:'全部',
          num:999
        },{
          category:'全部',
          num:999
        },{
          category:'全部',
          num:999
        },{
          category:'全部',
          num:999
        },{
          category:'全部',
          num:999
        },{
          category:'全部',
          num:999
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./commonCss.scss";
  .docs {
    padding: 16px 0;
    .contents {
      display: flex;
      justify-content: space-evenly;
      .summarize,.proportion,.sum {
        width: 390px;
        height: 380px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
    }
  }

</style>