
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  overflow: auto;
  h1 {
    /* @include ellipsisNoWrap(); */
    width: 87%;
    padding: 4px 0;
    font-size: 22px;
    color: #222222;
    letter-spacing: 0;
    text-align: center;
  }
  h3 {
    /* @include ellipsisNoWrap(); */
    width: 87%;
    padding: 6px 0 16px 0;
    font-family: 'Arial';
    font-size: 15px;
    color: rgba(0,0,0,0.45);
    letter-spacing: 0;
    text-align: center;
  }
  h5 {
    /* @include ellipsisNoWrap(); */
    width: 87%;
    padding: 3px 0;
    font-size: 16px;
    line-height: 20px;
    color: #222222;
    letter-spacing: 0;
    text-align: center;
  }
  ul {
    margin-top: 8px;
    width: 82%;
    border-top: 3px solid #C0C4CC;
    li {
      padding: 10px 0 0 0;
      .label {
        display: inline-block;
        padding: 5px 4px;
        text-align: center;
        font-size: 14px;
        background-color: #eee;
      }
      .content {
        padding: 2px 5px 2px 0;
        font-size: 14px;
        color: rgba(0,0,0,0.65);
        line-height: 26px;
      }
    }
  }
}
</style>