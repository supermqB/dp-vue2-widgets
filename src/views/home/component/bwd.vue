<template>
  <div class="bwd">
    <div class="head">
      <span>业务模型</span>
    </div>
    <div class="body">
      <div class="left boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>数据集</p>
        </div>
        <VueEcharts
          :option="datasetOption"
          :auto-resize="true"
          style="width: 100%; height: 95%; top: -15%; left: 3%"
        ></VueEcharts>
      </div>
      <div class="right boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>数据明细</p>
        </div>
        <VueEcharts
          :option="detailOption"
          :auto-resize="true"
          style="width: 100%; height: 95%; top: -15%; left: 3%"
        ></VueEcharts>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('home')

export default {
  data() {
    return {
      datasetOption: {
        color: ['#5FDBA0'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          itemStyle: {}
        },
        grid: {
          left: '3%',
          right: '10%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          name: '组',
          max: 800,
          interval: 100,
          boundaryGap: [0, 0.01],
          nameTextStyle: {
            color: '#909399'
          },
          axisLabel: {
            color: '#909399'
          },
          splitLine: {
            lineStyle: {
              color: '#EEEEEE',
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: [],
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#909399'
          },
          axisLine: {
            lineStyle: {
              color: '#EEEEEE'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 24,
            data: []
          }
        ]
      },
      detailOption: {
        color: ['#89F0BF'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          itemStyle: {}
        },
        grid: {
          left: '3%',
          right: '10%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          name: '条',
          max: 800,
          interval: 100,
          boundaryGap: [0, 0.01],
          nameTextStyle: {
            color: '#909399'
          },
          axisLabel: {
            color: '#909399'
          },
          splitLine: {
            lineStyle: {
              color: '#EEEEEE',
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: [],
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#909399'
          },
          axisLine: {
            lineStyle: {
              color: '#EEEEEE'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 24,
            data: []
          }
        ]
      }
    }
  },
  computed: {
    ...mapState([
      'bwdDatasetValue',
      'bwdDatasetTitle',
      'bwdDetailValue',
      'bwdDetailTitle',
      'bwdValueList'
    ])
  },
  methods: {
    ...mapMutations(['setBwdData']),
    ...mapActions(['queryDataset'])
  },
  async mounted() {
    // this.datasetOption.series[0].data = this.bwdDatasetValue
    this.datasetOption.series[0].data = !this.bwdValueList.dataSetValue
      ? []
      : this.bwdValueList.dataSetValue.source
    this.detailOption.series[0].data = this.bwdDetailValue
    this.datasetOption.yAxis.data = this.bwdDatasetTitle
    this.detailOption.yAxis.data = this.bwdDetailTitle
    await this.queryDataset
  }
}
</script>

<style scoped lang="scss">
@import './commonCss.scss';
.bwd {
  padding: 16px;
  .body {
    display: flex;
    height: 270px;
  }
  .left,
  .right {
    margin-right: 16px;
    flex: 1;
  }
}
</style>
