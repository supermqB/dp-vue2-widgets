# StatisticsTable 统计表格

### 示例

::: demo

```html
<template>
  <dp-statistics-table
    class="demo-table"
    :tableTitle="tableTitle"
    :data="data"
    :lastColIndex="2"
  ></dp-statistics-table>
</template>

<script>
  const formatNum = (row, column, cellValue, index) =>
    Number(cellValue || 0).toLocaleString()
  const formatPercent = (row, column, cellValue, index) =>
    (Number(cellValue || 0) * 100).toFixed(2) + '%'
  export default {
    data() {
      return {
        data: [
          {
            entityCode: 'dic',
            sbrNum: 35856,
            regNum: 78711,
            suspectNum: 886,
            suspectRate: 0.0005797879,
            deformNum: 111,
            sbrNumT: 35856,
            regNumT: 78711,
            suspectNumT: 886,
            suspectRateT: 0.0005797879,
            deformNumT: 111,
            objectType: '值域',
            bigType: '值域'
          },
          {
            entityCode: 'drg',
            sbrNum: 226709,
            regNum: 0,
            suspectNum: 0,
            suspectRate: 0,
            deformNum: 0,
            sbrNumT: 226709,
            regNumT: 0,
            suspectNumT: 0,
            suspectRateT: 0,
            deformNumT: 0,
            objectType: '药品(西药/中成药/制剂)',
            bigType: '业务编码'
          },
          {
            entityCode: 'phm',
            sbrNum: 3603,
            regNum: 0,
            suspectNum: 0,
            suspectRate: 0,
            deformNum: 0,
            sbrNumT: 3603,
            regNumT: 0,
            suspectNumT: 0,
            suspectRateT: 0,
            deformNumT: 0,
            objectType: '药物',
            bigType: '业务编码'
          },
          {
            entityCode: 'dep',
            sbrNum: 167,
            regNum: 500101,
            suspectNum: 0,
            suspectRate: 0,
            deformNum: 0,
            sbrNumT: 167,
            regNumT: 500101,
            suspectNumT: 0,
            suspectRateT: 0,
            deformNumT: 0,
            objectType: '合计',
            bigType: '自编码'
          }
        ],
        tableTitle: [
          { label: '对象类别', prop: 'objectType', align: 'center' },
          { label: '大类', prop: 'bigType', align: 'center' },
          {
            label: '本月',
            align: 'center',
            children: [
              {
                label: '标准量（条）',
                prop: 'sbrNumT',
                align: 'center',
                formatter: formatNum
              },
              {
                label: '识别量（次）',
                prop: 'regNumT',
                align: 'center',
                formatter: formatNum
              },
              {
                label: '疑似量（条）',
                prop: 'suspectNumT',
                align: 'center',
                formatter: formatNum
              },
              {
                label: '疑似率',
                prop: 'suspectRateT',
                align: 'center',
                formatter: formatPercent
              },
              {
                label: '形变量（条）',
                prop: 'deformNumT',
                align: 'center',
                formatter: formatNum
              }
            ]
          },
          {
            label: '累计',
            align: 'center',
            children: [
              {
                label: '标准量（条）',
                prop: 'sbrNum',
                align: 'center',
                formatter: formatNum
              },
              {
                label: '识别量（次）',
                prop: 'regNum',
                align: 'center',
                formatter: formatNum
              },
              {
                label: '疑似量（条）',
                prop: 'suspectNum',
                align: 'center',
                formatter: formatNum
              },
              {
                label: '疑似率',
                prop: 'suspectRate',
                align: 'center',
                formatter: formatPercent
              },
              {
                label: '形变量（条）',
                prop: 'deformNum',
                align: 'center',
                formatter: formatNum
              }
            ]
          }
        ]
      }
    }
  }
</script>
```

:::

### 参数说明

| 参数         | 说明                            | 类型          | 可选值 | 默认值 |
| ------------ | ------------------------------- | ------------- | ------ | ------ |
| data         | 表格数据                        | Array         | --     | []     |
| tableTitle   | 表格配置                        | Array         | --     | []     |
| lastColIndex | 最后一行合并的列数              | Number        | --     | 1      |
| lastColText  | 最后一行合并的文字              | String        | --     | 合计   |
| callback     | 自定义合并                      | Function/Null | --     | null   |
| columnIndex  | 需要修改的列（暂时不用,默认 0） | Number/Array  | --     | 0      |
