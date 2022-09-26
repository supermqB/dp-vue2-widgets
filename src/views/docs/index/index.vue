<template>
  <dp-layout-container>
    <template #main>
      <div class="docWrap">
        <vue-particles v-bind="config" class="particles"></vue-particles>
        <div class="header">
          <Breadcrumb baseLabel="文献库" currentLabel="文献检索"></Breadcrumb>
        </div>
        <div class="content" v-if="searchShow">
          <h1>
            <img src="@/assets/images/common/logo.png" />
            <span>联仁文库</span>
          </h1>
          <ul class="type">
            <li v-for="(name, index) in typeList" :key="index" @click="changeType" :class="{sure:name == articleType}">
              {{ name }}
            </li>
          </ul>
          <div class="search">
            <el-input
              placeholder="请输入内容"
              @input="updateContent($event)"
              :value="searchContent"
              class="searchOnece"
            ></el-input>
            <el-button slot="append" type="primary" class="onece" @click="SearchOnce"
              >搜索一下</el-button
            >
            <el-button type="text" class="advance"  @click="openAdvSearch">高级搜索</el-button>
          </div>

          <div class="hotSearch">
            <span>热搜:</span>
            <p v-for="(name, index) in hotSearch" :key="index" class="item" @click="hotHandler($event)">
              {{ name }}
            </p>
          </div>
        </div>
        <div class="contant2" v-else>
          <div class="searchContent">
            <div class="leftImg">
              <div class="leftImg">
                <h1>
                  <img src="@/assets/images/common/logo.png" />
                  <span>联仁文库</span>
                </h1>
              </div>
            </div>
            <div class="right">
              <ul class="type">
                <li v-for="(name, index) in typeList" :key="index" @click="changeType" :class="{sure:name == articleType}">
                  {{ name }}
                </li>
              </ul>

              <div class="searchInput">
                <el-input
                  placeholder="请输入内容"
                  @input="updateContent($event)"
                  :value="searchContent"
                  size="medium"
                ></el-input>
                <el-button  type="primary" class="advanced"  @click="SearchOnce"
                  >搜索一下</el-button>
                <el-button  type="text" class="advanced"  @click="openAdvSearch"
                  >高级搜索</el-button>
              </div>
              

              <div class="hotSearch">
                <span>热搜:</span>
                <p v-for="(name, index) in hotSearch" :key="index" class="item"  @click="hotHandler($event)">
                  {{ name }}
                </p>
              </div>
          </div>
          </div>
          
          <div class="list">
            <div v-for="item in listData" class="item" :key="item.id">
              <div class="titlerow">
                <div class="typespan">{{ item.docTypeName }}</div>
                <div
                  class="title"
                  @click="forward2SumPage(item.id)"
                >
                  {{ getItemTilte(item) }}
                </div>
              </div>
              <div class="sumline" >
                {{ getItemSumline(item) }}
              </div>
            </div>
          </div>

          <!-- 分页器 -->
          <div class="footer">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="pageInfo.curPage"
              :page-size.sync="pageInfo.pageSize"
              :page-sizes="[5, 10, 20, 50]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="pageInfo.totalSize"
              :style="{ alignSelf: 'end' }"
            >
            </el-pagination>
          </div>
        </div>
        <div>
          <EditDialog mode="create" ref="editDialog" @doc-create="createDocHandler" />
          <adv-search-dialog
            ref="advSearchDialog"
            :columns="advSearchCols"
            @adv-search-action="advSearchHandler"
          />
        </div>
      </div>
    </template>
  </dp-layout-container>
</template>

<script>
import EditDialog from "@/views/docs/list/EditDialog.vue";
import AdvSearchDialog from "@/views/common/AdvSearchDialog";
import { debounce } from 'lodash'
import config from './particlesjs-config.json';
import Breadcrumb from '@/components/header/Breadcrumb.vue';
import tableHeader from "@/views/docs/list/config/tableHeader";
import { createNamespacedHelpers} from 'vuex';
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("docs/index");
import { docListUtils } from '../list/Center.vue'
import articleTypes from './articleType'

export default {
  components: {
    Breadcrumb,
    AdvSearchDialog,
    EditDialog
  },
  computed:{
    ...mapState(["listData","pageInfo",'hotSearch','searchContent','articleType','typeList']),
    advSearchCols() {
      return tableHeader;
    },
  },
  data() {
    return {
      config,
      searchShow:true
    }
  },
  methods: {
    ...mapMutations(['setSearchContent','steArticleType','setTypeList']),
    ...mapActions(['search','getHotSearch']),
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.lazyList()

    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.lazyList()
    },
    SearchOnce(){
      this.searchShow = false
      this.setSearchContent(this.searchContent)
      this.lazyList()
    },
    ...docListUtils,
    hotHandler(e){
      this.searchShow = false
      console.log(e.target.innerText);
      this.setSearchContent(e.target.innerText)
      this.lazyList()
    },
    updateContent(e){
      console.log(e);
      this.setSearchContent(e)
    },
    openAdvSearch() {
      this.$refs.advSearchDialog.open();
    },
    createDocHandler(docProps) {
      this.importDoc(docProps) && this.$refs.editDialog.toggleOpen();
    },
    advSearchHandler(advSearchCriteria) {
      console.log(advSearchCriteria);
    },
    changeType(e){
      console.log(e.target.innerText);
      this.steArticleType(e.target.innerText)
      this.lazyList()
    }
  },
 watch:{
  searchContent (value) {
    if(value){
      this.searchShow = false
    }
  }
 },
 mounted(){
  this.lazyList = debounce(() => {
    this.search()
  },500)
  this.setTypeList()
  console.log(articleTypes);
 },
 created(){
  this.getHotSearch()
 }
}
</script>

<style scoped lang="scss">
@mixin ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
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
  .sure {
    color: #1890ff;
    font-weight: 900;
  }
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
    cursor: pointer;
    padding: 4px 7px;
    display: inline-block;
    color: #1890ff;
    border-radius: 20px;
    background-color: rgba(24, 144, 255, 0.1);
    border: 1px solid rgba(24, 144, 255, 0.2);
  }
}
.contant2 {
  width: 100%;
  z-index: 100;
  .searchContent {
    width: 100%;
    // background-color: red;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    padding: 10px;
    align-items: center;
    box-sizing: border-box;
    .leftImg {
      margin-left: 10px;
      // background-color: #fff;
      text-align: center;
      h1 {
        margin: auto;
        img {
          margin-right: 40px;
        }
      }
    }
    .right {
      // background-color: pink;
      flex: 1;
      padding:0 40px;
     ::v-deep .el-input {
        height: 30px;
        width: 500px;
        border-radius: 0;
      }
      .advanced {
        margin-left: 20px;
        height: 30px;
      }
    }
    .hotSearch {
      .item {
        scale: 0.8;
      }
    }
  }
}
.list {
    flex: 1 1 auto;
    overflow-y: auto;
    margin: 0 6px 6px 6px;
    border-bottom: 1px solid #f2f2f2;
    .item {
      height: 72px;
      border: 1px solid #f2f2f2;
      border-width: 1px 1px 0 1px;
      font-size: 12px;
      line-height: 14px;
      padding: 16px 6px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      &:nth-child(odd) {
        background: #fafafa;
      }
      &:nth-child(even) {
        background: #ffffff;
      }
      &:hover {
        background-color: #eeffff;
      }
      .titlerow {
        display: flex;
        align-items: center;
        .typespan {
          color: #fff;
          background-color: #1890ff;
          border-radius: 2px;
          margin-right: 6px;
          padding: 0 6px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          word-break: keep-all;
          white-space: nowrap;
        }
        .title {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: bold;
          width: calc(100% - 70px);
          @include ellipsis();
          &:hover {
            color: #1890ff;
            text-decoration: underline;
          }
        }
      }

      .sumline {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.45);
        line-height: 12px;
        @include ellipsis();
      }
    }
  }
.footer {
  display: flex;
  justify-content: flex-end;
}
</style>
