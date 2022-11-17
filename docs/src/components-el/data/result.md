# Result 结果

::: demo

```html

  <dp-row>
    <dp-col :sm="12" :lg="6">
      <dp-result icon="success" title="成功提示" subTitle="请根据提示进行操作">
        <template slot="extra">
          <dp-button type="primary" size="medium">返回</dp-button>
        </template>
      </dp-result>
    </dp-col>
    <dp-col :sm="12" :lg="6">
      <dp-result icon="warning" title="警告提示" subTitle="请根据提示进行操作">
        <template slot="extra">
          <dp-button type="primary" size="medium">返回</dp-button>
        </template>
      </dp-result>
    </dp-col>
    <dp-col :sm="12" :lg="6">
      <dp-result icon="error" title="错误提示" subTitle="请根据提示进行操作">
        <template slot="extra">
          <dp-button type="primary" size="medium">返回</dp-button>
        </template>
      </dp-result>
    </dp-col>
    <dp-col :sm="12" :lg="6">
      <dp-result icon="info" title="信息提示" subTitle="请根据提示进行操作">
        <template slot="extra">
          <dp-button type="primary" size="medium">返回</dp-button>
        </template>
      </dp-result>
    </dp-col>
  </dp-row>

```

:::
