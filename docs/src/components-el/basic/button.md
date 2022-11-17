# Button 按钮

### 主要按钮
用于主行动点

::: demo
```html
<el-row>
  <el-col :span="3">默认按钮</el-col>
  <el-col :span="21">
    <el-button type="primary">小按钮</el-button>
    <el-button type="primary">两字</el-button>
  </el-col>
</el-row>
<el-row>
  <el-col :span="3">危险按钮</el-col>
  <el-col :span="21">
    <el-button type="danger">小按钮</el-button>
    <el-button type="danger">两字</el-button>
  </el-col>
</el-row>
```
:::

### 次要按钮
用于次行动点

::: demo
```html
<el-row>
  <el-col :span="3">默认按钮</el-col>
  <el-col :span="21">
    <el-button plain>次要按钮</el-button>
    <el-button plain>次按钮</el-button>
  </el-col>
</el-row>
<el-row>
  <el-col :span="3">危险按钮</el-col>
  <el-col :span="21">
    <el-button type="danger" plain>次要按钮</el-button>
    <el-button type="danger" plain>三个字</el-button>
  </el-col>
</el-row>
```
:::

### 虚框按钮
常用于添加操作

::: demo
```html
<el-row>
  <el-col :span="3">默认按钮</el-col>
  <el-col :span="21">
    <el-button class="is-dash">次要按钮</el-button>
    <el-button class="is-dash">次按钮</el-button>
    <el-button class="is-dash">两字</el-button>
  </el-col>
</el-row>
<el-row>
  <el-col :span="3">危险按钮</el-col>
  <el-col :span="21">
    <el-button type="danger" plain class="is-dash">次要按钮</el-button>
    <el-button type="danger" plain class="is-dash">三个字</el-button>
    <el-button type="danger" plain class="is-dash">三个字</el-button>
  </el-col>
</el-row>
```
:::



### 禁用状态
常用于不可用状态

::: demo
```html
<el-row>
  <el-col :span="3">默认按钮</el-col>
  <el-col :span="21">
    <el-button disabled type="primary">小按钮</el-button>
    <el-button disabled plain>失效按钮</el-button>
  </el-col>
</el-row>
<el-row>
  <el-col :span="3">危险按钮</el-col>
  <el-col :span="21">
    <el-button type="danger" disabled plain class="is-dash">四字按钮</el-button>
    <el-button type="danger" disabled >两字</el-button>
  </el-col>
</el-row>
```
:::

### 文字按钮
没有边框和背景色的按钮

:::demo
```html
<el-button type="text">文字按钮</el-button>
<el-button type="text" disabled>文字按钮</el-button>
```
:::

<!-- ### 长按钮
没有边框和背景色的按钮

:::demo
```html
<el-button type="text">文字按钮</el-button>
<el-button type="text" disabled>文字按钮</el-button>
```
::: -->

### 加载中
点击按钮后进行加载操作，在按钮上显示加载状态

:::demo
```html
<el-button type="primary" :loading="true">加载中</el-button>
```
:::
