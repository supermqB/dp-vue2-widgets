
<template>
  <div class="abstractWrap">
    <h1>{{ title }}</h1>
    <h3>{{ titleEn ? titleEn : '无' }}</h3>
    <h5>{{ author ? author : '无' }}</h5>
    <h5>{{ organization ? organization : '无' }}</h5>
    <ul>
      <li
        v-for="(item, key) in contentList"
        :key="key">
        <p class="label">{{ `【${item.label}】` }}</p>
        <p class="content">{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    titleEn: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    organization: {
      type: String,
      default: '',
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  overflow: auto;
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
    border-top: 4px solid #C0C4CC;
    li {
      padding: 10px 0 0 0;
      .label {
        display: inline-block;
        padding: 7px 4px;
        text-align: center;
        font-size: 16px;
        background-color: #eee;
      }
      .content {
        padding: 4px 5px;
        font-size: 14px;
        color: rgba(0,0,0,0.65);
        line-height: 26px;
      }
    }
  }
}
</style>