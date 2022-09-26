<template>
  <div class="wrapper">
    <div class="header">业务模型</div>
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
        color: ['#5FDBA0'],
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
          data: ['医保版', '卫生版', '运营版'],
          axisTick: {
            show: false
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 24,
            data: [250, 445, 645]
          }
        ]
      },
      detailOption: {
        color: ['#89F0BF'],
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
          data: ['医保版', '卫生版', '运营版'],
          axisTick: {
            show: false
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 24,
            data: [480, 320, 370]
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
