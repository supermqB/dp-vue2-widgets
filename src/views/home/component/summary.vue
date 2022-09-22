<template>
  <ul class="wrap">
    <li v-for="(item,key) in list"
      :key="key"
      :style="item.style">
      <div class="header">
        <span>{{ item.label }}</span>
        <!-- icon -->
      </div>
      <div class="content">
        <p
          v-for="(it,index) in item.contents"
          :key="index"
        >
          <span>{{ it.label }}</span>
          <b :style="it.style">{{ it.number }}</b>
          <span class="unit">{{ it.unit }}</span>
        </p>
      </div>
      
    </li>
  </ul>
</template>

<!-- color, background-color -->

<script>
  export default {
    props: {
      list: Array,
      default: () => []
    },
    data() {
      return {

      }
    },
  }
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  li {
    max-width: 220px;
    min-width: 190px;
    height: 124px;
    width: 15%;
    padding: 10px 16px;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    .header {
      height: 35px;
      line-height: 35px;
      font-size: 17px;
      font-weight: 600;
      color: rgba(0,0,0,0.85)
      /* font-weight: bold; */
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: rgba(0,0,0,0.65);
        b {
          padding: 0 5px;
          font-size: 24px
        }
        .unit {
          color: rgba(0,0,0,0.45)
        }
      }
    }
  }
}
</style>