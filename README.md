# 数据平台部 UI 组件库

## 简介

dp-vue2-widgets 是基于 element-ui 二次封装的 UI 组件库

## 安装

### 使用 gitlab 源 安装

如果已经上传 ssh token，在 package.json 的 dependencies 中配置。到[这里](http://172.16.180.219:9001/-/profile/keys)配置你 public key

```
    "dp-vue2-widgets": git+ssh://git@172.16.180.219:29022/bigdata-platform/sixdatarepo/dp-vue2-widgets.git
```

也可以使用 access token 通过 http 协议配置，请替换示例中的账号。到[联仁 gitlab](http://172.16.180.219:9001/-/profile/personal_access_tokens)创建你的个人 access token。

```
    "dp-vue2-widgets": "git+http://yinwenbao:cC3_zXwzKgzumdP7vrba@172.16.180.219:9001/bigdata-platform/sixdatarepo/dp-vue2-widgets.git"
```

## 快速开始

```JavaScript
import Vue from 'vue'

import ElementUI from 'element-ui'
import DpVue2Widgets from 'dp-vue2-widgets'

Vue.use(ElementUI)
Vue.use(DpVue2Widgets)

import 'dp-vue2-widgets/dist/theme-dp-ui/index.css'
```

## 访问文档

[文档在线地址](http://172.16.29.76:10020)

进入 docs 目录

```
cd docs
```

启动本地服务

```
npm run install
npm run docs:dev
```

或者
构建静态文件

```
npm run install
npm run docs:build
```

## 查看示例

进入 examples 目录

启动本地服务

```
npm run install
npm run serve
```

或者
构建静态文件

```
npm run install
npm run build
```
