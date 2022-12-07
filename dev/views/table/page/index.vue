<template>
  <div class="wrapper">
    <div class="page">
      <div>
        <div>
          <span>总条数：</span
          ><el-input
            style="width: 100px"
            v-model.number="total"
            type="number"
          />
        </div>
        <div><span>当前页数：</span> {{ currentPage }}</div>
        <div><span>每页显示条数：</span>{{ pageSize }}</div>
      </div>
      <div class="component">
        <dp-pagination
          :currentPage.sync="currentPage"
          :pageSize.sync="pageSize"
          :total="total"
          @size-change="sizeChangeHandler"
          @current-change="currentChangeHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 20,
      currentPage: 1,
      total: 100
    }
  },
  methods: {
    sizeChangeHandler(v) {
      console.log('== sizeChangeHandler ==', v)
    },
    currentChangeHandler(v) {
      console.log('== currentChangeHandler ==', v)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
  .page {
    background: #eeeeee;
    padding: 10px;
    .component {
      margin-top: 10px;
      background: #ddd;
    }
  }
}
</style>
