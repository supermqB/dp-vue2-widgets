<template>
  <div class="wrapper">
    <div class="header">事件模型</div>
    <div>
      <VueEcharts
        class="left"
        :option="datasetOption"
        :auto-resize="true"
        style="width: 48%; height: 270px"
      ></VueEcharts>
      <VueEcharts
        class="right"
        :option="detailOption"
        :auto-resize="true"
        style="width: 48%; height: 270px"
      ></VueEcharts>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datasetOption: {
        color: ['#7696F1'],
        title: {
          text: '数据集',
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
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['医保版V1.0', '卫生版V1.0', '运营版V1.0'],
          axisTick: {
            show: false
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 24,
            data: [340, 640, 485]
          }
        ]
      },
      detailOption: {
        color: ['#AEC2FC'],
        title: {
          text: '数据明细',
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
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['医保版V1.0', '卫生版V1.0', '运营版V1.0'],
          axisTick: {
            show: false
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 24,
            data: [480, 325, 720]
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
  height: 350px;
}
.header {
  margin-top: 22px;
  font-size: 15px;
  font-weight: 700;
  font-family: PingFangSC-Medium;
  color: rgba(0, 0, 0, 0.85);
  width: 60px;
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
  right: 24px;
  position: absolute;
  bottom: 16px;
  border: 1px solid #ebeef5;
}
</style>
