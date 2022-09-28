<template>
  <div class="event">
    <div class="head">
      <span>事件模型</span>
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
          style="width: 100%; height: 95%; top: -15%"
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
          style="width: 100%; height: 95%; top: -15%"
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
        color: ['#7696F1'],
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
        color: ['#AEC2FC'],
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
      'eventDatasetValue',
      'eventDatasetTitle',
      'eventDetailValue',
      'eventDetailTitle'
    ])
  },
  methods: {
    ...mapMutations(['setEventData']),
    ...mapActions(['queryEventData'])
  },
  async mounted() {
    this.datasetOption.series[0].data = this.eventDatasetValue
    this.detailOption.series[0].data = this.eventDetailValue
    this.datasetOption.yAxis.data = this.eventDatasetTitle
    this.detailOption.yAxis.data = this.eventDetailTitle
    await this.queryEventData
  }
}
</script>

<style scoped lang="scss">
@import './commonCss.scss';
.event {
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
