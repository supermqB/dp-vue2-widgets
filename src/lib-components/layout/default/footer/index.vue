<template>
  <div class="footer">
    <div class="tags"></div>
    <div class="version">联仁健康医疗大数据科技股份有限公司 V1.1.0</div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  height: 32px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f5f5f5;
  // line-height: 32px;
  z-index: 9;
  box-sizing: border-box;

  .tabs {
    justify-content: flex-start;
  }

  .version {
    justify-content: flex-end;
    width: 300px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    padding-right: 16px;
    line-height: 31px;
    color: rgba(0, 0, 0, 0.45);
    text-align: right;
  }
}
</style>
