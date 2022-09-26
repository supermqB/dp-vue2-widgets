<template>
  <div class="wrapper">
    <div class="header">值域</div>
    <div>
      <VueEcharts
        class="left"
        :option="datasetOption"
        :auto-resize="true"
        style="width: 48%; height: 380px"
      ></VueEcharts>
      <div class="right">
        <VueEcharts
          class="complete"
          :option="detailOption"
          :auto-resize="true"
        ></VueEcharts>
        <ul>
          <li>
            <span style="color: #3eb9f0; font-size: 13px">已完成</span>
            289 条
          </li>
          <li>
            <span style="color: #efbe62; font-size: 13px">待完成</span> 10 条
          </li>
        </ul>
      </div>
      <span class="suspect"> </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datasetOption: {
        color: ['#FEB73A', '#4671FE'],
        title: {
          text: '数量汇总',
          padding: [15, 24],
          textStyle: {
            fontSize: 13
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        axisPointer: {
          link: { xAxisIndex: 'all' }
        },
        grid: [
          {
            left: '3%',
            right: '-55%',
            bottom: '3%',
            width: '47%',
            containLabel: true
          },
          {
            left: '51%',
            right: '3%',
            bottom: '3%',
            width: '47%',
            containLabel: true
          }
        ],
        xAxis: [
          {
            type: 'value',
            boundaryGap: [0, 0.01],
            interval: 500,
            inverse: true,
            position: 'right',
            axisLine: { onZero: true }
          },
          {
            type: 'value',
            interval: 500,
            gridIndex: 1,
            boundaryGap: [0, 0.01],
            axisLine: { onZero: true }
          }
        ],
        yAxis: [
          {
            type: 'category',
            position: 'right',
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            // nameTextStyle: {
            //   align: 'center'
            // },
            data: [
              '国家标准',
              '国家强制标准',
              '国家推荐标准',
              '行业标准',
              '地方标准',
              '企业标准',
              '自定义标准',
              '团体标准'
            ]
          },
          {
            type: 'category',
            position: 'left',
            axisTick: {
              show: false
            },
            gridIndex: 1,
            inverse: true,
            // nameTextStyle: {
            //   align: 'center'
            // },
            data: [
              '国家标准',
              '国家强制标准',
              '国家推荐标准',
              '行业标准',
              '地方标准',
              '企业标准',
              '自定义标准',
              '团体标准'
            ]
          }
        ],
        series: [
          {
            name: '值域目录（组）',
            type: 'bar',
            barWidth: 18,
            data: [1150, 850, 1750, 1250, 1950, 1700, 950, 750]
          },
          {
            name: '值域明细（条）',
            type: 'bar',
            barWidth: 18,
            xAxisIndex: 1,
            yAxisIndex: 1,
            // data: [1450, 1550, 1100, 850, 2100, 1550, 1100, 850] 数据反过来
            data: [850, 1100, 1550, 2100, 850, 1100, 1550, 1450]
          }
        ]
      },
      detailOption: {
        color: ['#57CBFF', '#FECF7A'],
        title: {
          text: '疑似任务汇总',
          padding: [15, 24],
          textStyle: {
            fontSize: 13
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '10%',
          left: 'center',
          orient: 'horizontal'
        },
        series: [
          {
            name: '疑似任务汇总',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 289, name: '已完成' },
              { value: 50, name: '待完成' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  height: 460px;
}
.header {
  margin-top: 22px;
  font-size: 15px;
  font-weight: 700;
  font-family: PingFangSC-Medium;
  color: rgba(0, 0, 0, 0.85);
  width: 30px;
  padding-bottom: 6px;
  margin-left: 16px;
  line-height: 16px;
  border-bottom: 4px solid #1890ff;
}
.left {
  left: 16px;
  position: absolute;
  bottom: 16px;
  border: 1px solid #ebeef5;
}
.right {
  left: 50%;
  width: 20%;
  height: 380px;
  position: absolute;
  bottom: 16px;
  border: 1px solid #ebeef5;
}
.complete {
  height: 280px;
}
li {
  padding: 0 8px;
  width: 188px;
  height: 36px;
  font-weight: 700;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 12px;
  line-height: 36px;
}
.suspect {
  right: 24px;
}
</style>
