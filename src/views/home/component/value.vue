<template>
  <div class="value">
    <div class="head">
      <span>值域</span>
    </div>
    <div class="body">
      <div class="left boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>数量汇总</p>
        </div>
        <VueEcharts
          :option="datasetOption"
          :auto-resize="true"
          style="width: 100%; height: 85%"
        ></VueEcharts>
      </div>
      <div class="right boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>疑似任务汇总</p>
        </div>
        <div class="collect">
          <div class="suspect">
            <VueEcharts
              :option="suspectOption"
              :auto-resize="true"
              style="width: 100%; height: 200px"
            ></VueEcharts>
            <div class="completed">
              <p>已完成</p>
              <div class="count">
                <i>{{
                  this.dictSuspectList.length
                    ? this.dictSuspectList[1].completed
                    : ''
                }}</i>
                <span>条</span>
              </div>
            </div>
            <div class="undone">
              <p>待完成</p>
              <div class="count">
                <i>{{
                  this.dictSuspectList.length
                    ? this.dictSuspectList[1].unfinished
                    : ''
                }}</i>
                <span>条</span>
              </div>
            </div>
          </div>
          <div class="suspectData">
            <div class="source">
              <p class="sourceTitle">疑似主要来源 (TOP10)</p>
              <div
                class="sourceMsg"
                v-for="(item, index) in this.dictSuspectSource"
                :key="index"
              >
                <div class="ranking">{{ index + 1 }}</div>
                <p>{{ item.source }}</p>
                <span class="num">{{ item.count }}</span>
                <span class="unit">次</span>
              </div>
            </div>
          </div>
        </div>
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
        color: [
          {
            colorStops: [
              {
                offset: 0,
                color: '#FFB600'
              },
              {
                offset: 0.05,
                color: '#f7d390'
              }
            ]
          },
          {
            colorStops: [
              {
                offset: 0.95,
                color: '#38D3EC'
              },
              {
                offset: 1,
                color: '#4671FE'
              }
            ]
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['值域目录（组）', '值域明细（条）'],
          width: '500px',
          orient: 'horizontal',
          itemGap: 80,
          left: '35%'
        },
        axisPointer: {
          link: { xAxisIndex: 'all' }
        },
        grid: [
          {
            left: '3%',
            right: '50%',
            bottom: '3%',
            width: '45%',
            containLabel: true
          },
          {
            right: '3%',
            bottom: '3%',
            width: '45%',
            containLabel: true
          }
        ],
        xAxis: [
          {
            type: 'value', //左侧图
            boundaryGap: [0, 0.01],
            inverse: true,
            position: 'right',
            axisLine: { onZero: true },
            axisLabel: {
              color: '#606266'
            },
            splitLine: {
              lineStyle: {
                color: '#EEEEEE',
                type: 'dashed'
              }
            }
          },
          {
            type: 'value',
            gridIndex: 1,
            boundaryGap: [0, 0.01],
            axisLine: { onZero: true },
            axisLabel: {
              color: '#606266'
            },
            splitLine: {
              lineStyle: {
                color: '#EEEEEE',
                type: 'dashed'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            inverse: true,
            position: 'right',
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#EEEEEE'
              }
            },
            data: []
          },
          {
            type: 'category',
            position: 'left',
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#606266'
            },
            axisLine: {
              lineStyle: {
                color: '#EEEEEE'
              }
            },
            gridIndex: 1,
            inverse: true,
            data: []
          }
        ],
        series: [
          {
            name: '值域目录（组）',
            type: 'bar',
            barWidth: 18,
            data: []
          },
          {
            name: '值域明细（条）',
            type: 'bar',
            barWidth: 18,
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: []
          }
        ]
      },
      suspectOption: {
        color: ['#57CBFF', '#FECF7A'],
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(31,45,61,0.65)',
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          padding: [0, 0, 10, 0],
          top: 'bottom',
          left: 'center',
          textStyle: {
            fontSize: 12,
            padding: [0, 0]
          },
          icon: 'circle',
          itemGap: 20,
          itemHeight: 10,
          itemWidth: 10,
          itemStyle: {
            borderCap: 'round'
          }
        },
        series: [
          {
            name: '疑似任务汇总',
            type: 'pie',
            radius: '50%',
            center: ['50%', '40%'],
            minAngle: 5,
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 2
            },
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              lineHeight: 15,
              show: true,
              formatter: '{b}\n{d}%'
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapState(['dictValueList', 'dictSuspectList']),
    ...mapGetters([
      'dictValueListCatalog',
      'dictValueListDetail',
      'dictValueListTitle',
      'dictSuspectData',
      'dictSuspectSource'
    ])
  },
  methods: {
    ...mapMutations(['setDictData', 'setSuspectData']),
    ...mapActions(['queryDictData', 'querySuspectData']),
    updateDictList() {
      this.datasetOption.series[0].data = this.dictValueListCatalog
      this.datasetOption.series[1].data = this.dictValueListDetail
      this.datasetOption.yAxis[0].data = this.dictValueListTitle
      this.datasetOption.yAxis[1].data = this.dictValueListTitle
    },
    updateSuspectList() {
      this.suspectOption.series[0].data = this.dictSuspectData
    }
  },
  async mounted() {
    await this.queryDictData()
    await this.querySuspectData()
    this.updateDictList()
    this.updateSuspectList()
  },
  watch: {
    dictValueList: {
      handler() {
        this.updateDictList()
      },
      deep: true
    },
    dictSuspectList: {
      handler() {
        this.updateSuspectList()
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
@import './commonCss.scss';
@mixin ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.value {
  padding: 16px;
  .body {
    display: flex;
    height: 380px;
    .right,
    .left {
      margin-right: 16px;
      flex: 1;
      width: 100%;
    }
    .left {
      align-items: center;
      padding-bottom: 16px;
      box-sizing: border-box;
    }
    .right {
      .collect {
        display: flex;
        height: 325px;
        .suspect {
          padding: 16px;
          flex: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          .completed,
          .undone {
            height: 36px;
            width: 188px;
            border: 1px solid rgba(200, 200, 200, 0.3);
            border-radius: 5px;
            height: 36px;
            width: 188px;
            display: flex;
            align-items: center;
            p {
              flex: 1;
              line-height: 22px;
              font: normal 600 13px normal;
              margin-left: 10px;
              color: #3eb9f0;
            }
            .count {
              height: 32px;
              width: 87px;
              border-radius: 5px;
              box-sizing: border-box;
              display: flex;
              justify-content: right;
              align-items: center;
              i {
                font-size: 16px;
                font-weight: 800;
                margin-right: 4px;
              }
              span {
                line-height: 22px;
                text-align: center;
                font-size: 12px;
                color: rgba($color: #000000, $alpha: 0.4);
                margin-right: 12px;
              }
            }
          }
          .undone {
            p {
              color: #efbe62;
            }
          }
        }
        .suspectData {
          flex: 3;
          margin-top: -16px;
          .source {
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .sourceTitle {
              font: normal 600 14px normal;
              padding: 18px 16px 0;
              margin-top: -6px;
              width: 309px;
            }
            .sourceMsg {
              width: 285px;
              height: 24px;
              box-shadow: 0 0 4px 0 rgba($color: #000000, $alpha: 0.1);
              display: flex;
              padding: 0 12px;
              font-size: 13px;
              align-items: center;
              color: rgba($color: #000000, $alpha: 0.65);
              margin-top: 5px;
              .ranking {
                font-size: 14px;
                margin-right: 32px;
                width: 16px;
              }
              p {
                flex: 1;
                @include ellipsis();
              }
              .num {
                font-weight: 700;
                margin-right: 4px;
              }
              .unit {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
