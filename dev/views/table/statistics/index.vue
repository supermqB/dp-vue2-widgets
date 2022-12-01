<template>
  <dp-layout-container>
    <template #asideLeft>
      <div class="section asideLeft">
        <dp-title text="大标题22" />
        <dp-subtitle text="小标题22" />
      </div>
    </template>
    <template #main>
      <div class="section main">
        <dp-statistics-table
          :tableTitle="tableTitle"
          :data="data"
          v-loading="loading"
          :lastColIndex="2"
        />
      </div>
    </template>
  </dp-layout-container>
</template>

<script>
const formatNum = (row, column, cellValue, index) =>
  Number(cellValue || 0).toLocaleString()
const formatPercent = (row, column, cellValue, index) =>
  (Number(cellValue || 0) * 100).toFixed(2) + '%'
export default {
  data() {
    return {
      loading: false,
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
          entityCode: 'reg',
          sbrNum: 663128,
          regNum: 1,
          suspectNum: 0,
          suspectRate: 0,
          deformNum: 1,
          sbrNumT: 663128,
          regNumT: 1,
          suspectNumT: 0,
          suspectRateT: 0,
          deformNumT: 1,
          objectType: '行政区划',
          bigType: '业务编码'
        },
        {
          entityCode: 'tcm',
          sbrNum: 1355,
          regNum: 0,
          suspectNum: 0,
          suspectRate: 0,
          deformNum: 0,
          sbrNumT: 1355,
          regNumT: 0,
          suspectNumT: 0,
          suspectRateT: 0,
          deformNumT: 0,
          objectType: '中医疾病',
          bigType: '业务编码'
        },
        {
          entityCode: 'tcs',
          sbrNum: 2054,
          regNum: 0,
          suspectNum: 0,
          suspectRate: 0,
          deformNum: 0,
          sbrNumT: 2054,
          regNumT: 0,
          suspectNumT: 0,
          suspectRateT: 0,
          deformNumT: 0,
          objectType: '中医证候',
          bigType: '业务编码'
        },
        {
          entityCode: 'mat',
          sbrNum: 3,
          regNum: 0,
          suspectNum: 0,
          suspectRate: 0,
          deformNum: 0,
          sbrNumT: 3,
          regNumT: 0,
          suspectNumT: 0,
          suspectRateT: 0,
          deformNumT: 0,
          objectType: '医用卫生耗材',
          bigType: '业务编码'
        },
        {
          entityCode: 'itm',
          sbrNum: 8210,
          regNum: 0,
          suspectNum: 0,
          suspectRate: 0,
          deformNum: 0,
          sbrNumT: 8210,
          regNumT: 0,
          suspectNumT: 0,
          suspectRateT: 0,
          deformNumT: 0,
          objectType: '医疗服务项目',
          bigType: '业务编码'
        },
        {
          entityCode: 'opt',
          sbrNum: 17067,
          regNum: 675,
          suspectNum: 227,
          suspectRate: 0.16678913,
          deformNum: 78,
          sbrNumT: 17067,
          regNumT: 675,
          suspectNumT: 227,
          suspectRateT: 0.16678913,
          deformNumT: 78,
          objectType: '手术操作',
          bigType: '业务编码'
        },
        {
          entityCode: 'lab',
          sbrNum: 1503,
          regNum: 75131,
          suspectNum: 67397,
          suspectRate: 0.35373247,
          deformNum: 199,
          sbrNumT: 1503,
          regNumT: 75131,
          suspectNumT: 67397,
          suspectRateT: 0.35373247,
          deformNumT: 199,
          objectType: '检验项目',
          bigType: '业务编码'
        },
        {
          entityCode: 'exm',
          sbrNum: 456,
          regNum: 0,
          suspectNum: 0,
          suspectRate: 0,
          deformNum: 0,
          sbrNumT: 456,
          regNumT: 0,
          suspectNumT: 0,
          suspectRateT: 0,
          deformNumT: 0,
          objectType: '检查项目',
          bigType: '业务编码'
        },
        {
          entityCode: 'com',
          sbrNum: 3759,
          regNum: 561,
          suspectNum: 34,
          suspectRate: 0.022666667,
          deformNum: 308,
          sbrNumT: 3759,
          regNumT: 561,
          suspectNumT: 34,
          suspectRateT: 0.022666667,
          deformNumT: 308,
          objectType: '企事业单位',
          bigType: '业务编码'
        },
        {
          entityCode: 'hrb',
          sbrNum: 5698,
          regNum: 2774,
          suspectNum: 648,
          suspectRate: 0.0017714502,
          deformNum: 333,
          sbrNumT: 5698,
          regNumT: 2774,
          suspectNumT: 648,
          suspectRateT: 0.0017714502,
          deformNumT: 333,
          objectType: '药品(中药饮片)',
          bigType: '业务编码'
        },
        {
          entityCode: 'dis',
          sbrNum: 41462,
          regNum: 60390,
          suspectNum: 4141,
          suspectRate: 0.06329481,
          deformNum: 251,
          sbrNumT: 41462,
          regNumT: 60390,
          suspectNumT: 4141,
          suspectRateT: 0.06329481,
          deformNumT: 251,
          objectType: '西医疾病',
          bigType: '业务编码'
        },
        {
          entityCode: 'pat',
          sbrNum: 3052,
          regNum: 552480,
          suspectNum: 0,
          suspectRate: 0,
          deformNum: 110640,
          sbrNumT: 3052,
          regNumT: 552480,
          suspectNumT: 0,
          suspectRateT: 0,
          deformNumT: 110640,
          objectType: '居民(患者)',
          bigType: '自编码'
        },
        {
          entityCode: 'emp',
          sbrNum: 295,
          regNum: 98807,
          suspectNum: 0,
          suspectRate: 0,
          deformNum: 99,
          sbrNumT: 295,
          regNumT: 98807,
          suspectNumT: 0,
          suspectRateT: 0,
          deformNumT: 99,
          objectType: '卫生人员',
          bigType: '自编码'
        },
        {
          entityCode: 'grp',
          sbrNum: 0,
          regNum: 0,
          suspectNum: 0,
          suspectRate: 0,
          deformNum: 0,
          sbrNumT: 0,
          regNumT: 0,
          suspectNumT: 0,
          suspectRateT: 0,
          deformNumT: 0,
          objectType: '群体',
          bigType: '自编码'
        },
        {
          entityCode: 'prd',
          sbrNum: 0,
          regNum: 0,
          suspectNum: 0,
          suspectRate: 0,
          deformNum: 0,
          sbrNumT: 0,
          regNumT: 0,
          suspectNumT: 0,
          suspectRateT: 0,
          deformNumT: 0,
          objectType: '产品',
          bigType: '自编码'
        },
        {
          entityCode: 'org',
          sbrNum: 538315,
          regNum: 41340,
          suspectNum: 4,
          suspectRate: 0.000051002844,
          deformNum: 6,
          sbrNumT: 538315,
          regNumT: 41340,
          suspectNumT: 4,
          suspectRateT: 0.000051002844,
          deformNumT: 6,
          objectType: '医疗卫生组织机构',
          bigType: '自编码'
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
          objectType: '医院科室',
          bigType: '自编码'
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
<style lang="scss" scoped>
.main {
  // height: 100%;
  padding: 6px;
  box-sizing: border-box;
}
</style>
