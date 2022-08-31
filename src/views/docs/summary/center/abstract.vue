
<template>
  <div class="abstractWrap">
    <h1>{{ title }}</h1>
    <h3>{{ nameEn }}</h3>
    <h5>{{ authors }}</h5>
    <h5>{{ location }}</h5>
    <ul>
      <li
        v-for="(item, key) in contentList"
        :key="key">
        <p>{{ item.label }}</p>
        <p>{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '2809名体检人群中高血压与Hp感染的关联性分析',
    },
    nameEn: {
      type: String,
      default: 'English Title balabalaba and  balalalalal',
    },
    authors: {
      type: String,
      default: '吕岩红， 张志勉',
    },
    location: {
      type: String,
      default: '山东大学齐鲁医院健康管理中心',
    },
    contentList: {
      type: Array,
      default: () => [{}]
    }
  }
}
</script>

<style lang="scss" scoped>
.abstractWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  h1 {
    padding: 10px 0;
    font-size: 22px;
    color: #222222;
    letter-spacing: 0;
    text-align: center;
  }
  h3 {
    padding: 10px 0;
    font-family: 'Arial';
    font-size: 15px;
    color: rgba(0,0,0,0.45);
    letter-spacing: 0;
    text-align: center;
  }
  h5 {
    padding: 2px 0;
    font-size: 16px;
    color: #222222;
    letter-spacing: 0;
    text-align: center;
  }
  ul {
    margin-top: 15px;
    width: 88%;
    border-top: 4px solid #C0C4CC
  }
}
</style>