# 指南

此组件库是由 UED 团队设计实现的，旨在保证产品视觉风格的统一，提升设计和开发效率。

## 快速开始

此组件库是基于[Element-UI](https://element.eleme.cn/#/zh-CN)二次封装的，需要先安装和引入 element-ui 组件库

### 安装

```bash
// 安装element-ui
npm i element-ui -S

// 安装lrhealth-dp-ui
npm i lrhealth-dp-ui -S
```

### 引入

```js
import Vue from 'vue'

// 引入ElementUI
import Element from 'element-ui'

// 引入DpUI
import DpVue2Widgets from 'dp-vue2-widgets'

// 统一样式表入口
import 'dp-vue2-widgets/dist/theme-dp-ui/index.css'

import App from './App.vue'

Vue.use(ElementUI)
Vue.use(DpVue2Widgets)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
