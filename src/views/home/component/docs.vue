<template>
  <div class="docs">
    <div class="head">
      <span>文献库</span>
    </div>
    <div class="contents">
      <div class="summarize boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>分类汇总</p>
        </div>
        <el-table
          border
          :data="selectLiteratureInfo"
          :header-cell-style="{height:'27px',padding:'0 0 0 15px'}"
          :cell-style="{height:'27px',padding:'0 0 0 15px'}"
          style="width: 350px">
          <el-table-column prop="docName" label="分类" width="259px">
            </el-table-column>
          <el-table-column prop="count" label="数量" width="90px">
            </el-table-column>
        </el-table>
      </div>
      <div class="proportion boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>分类占比</p>
        </div>
        <VueEcharts
        :option="defaultOption"
        :auto-resize="true"
        style="width: 100%; height: 100%;"
        ></VueEcharts>
      </div>
      <div class="sum boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>文献总数 （万个）</p>
        </div>
        <VueEcharts
        :option="lineOption"
        :auto-resize="true"
        style="width: 100%; height: 100%;"
        ></VueEcharts>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('home')
  export default {
    data() {
      return {
        // sliderValue:'0',
        defaultOption: {
           legend: {
            bottom: '5%',
            icon:'circle',
            itemGap:16,
            itemHeight: 20,
            itemWidth: 10,
            },
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              top:'-20%',
              radius: [50, 100],
              center: ['50%', '50%'],
              roseType: 'area',
              label:{
                lineHeight:15,
                show:true,
                formatter:'{b}\n\n{d}%',
                padding:[0,-40],
              },
              labelLine:{
                length:10,
                length2:45
              },
              data:[],
              // data: [
              //   { value: 40, name: '专著' },
              //   { value: 38, name: '论文' },
              //   { value: 32, name: '期刊' },
              //   { value: 30, name: '报纸' },
              //   { value: 28, name: '其他' }
              // ]
            }
          ]
        },
        lineOption: {
            dataZoom: [{
            type: 'slider', 
            throttle: '50', 
            maxValueSpan: 5, //用于限制窗口大小的最小值,在类目轴上可以设置为 5 表示 5 个类目
            start:0 ,//数据窗口范围的起始百分比 范围是：0 ~ 100。表示 0% ~ 100%。/
            end: 50, //数据窗口范围的结束百分比。范围是：0 ~ 100。
            zoomLock: true, //如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
            height:11,
            handleSize:'200%'
          }],
          
          // 主要用来控制图表四周留白
          grid: {
            left: '15%',
            top: '5%',
          },
          //直角坐标系 grid 中的 x 轴，
          xAxis: {
            type: 'category', //'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。

            // 坐标轴轴线相关设置
            axisLine: {
              lineStyle: {
                color: '#E5E5E5', // 坐标轴线线的颜色。
              }
            },
            // 坐标轴刻度标签(类目,简单说就是x轴上的内容)的相关设置
            axisLabel: {
              //  是否显示坐标刻度标签(这了指是否显示x轴上的月份)
              show: true,
              // 标签文字的颜色
              color: '#999',
              // 类目样式设置(文档中没有这个属性了,但是设置了也有效)
              // textStyle: {
              //     color: '#999'   
              // }   
            },
            //x轴刻度线设置
            axisTick: {
              "show": false
            },
            // 类目数据，在类目轴（type: 'category'）中有效。
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

          },
          //直角坐标系 grid 中的 y 轴，
          yAxis: {
            type: 'value', //'value' 数值轴，适用于连续数据。
            // 坐标轴轴线相关设置
            axisLine: {
              show: false //y轴线消失
            },
            // 坐标轴刻度标签(类目,简单说就是x轴上的内容)的相关设置
            axisLabel: {
              show: true,
              // 标签文字的颜色
              color: '#999',
              // 类目样式设置(文档中没有这个属性了,但是设置了也有效)
              // textStyle: {
              //     color: '#999'   
              // }   
            },
            //y轴刻度线设置
            axisTick: {
              "show": false
            },
          },
          series: [{
            type: 'line', //折线图是用折线将各个数据点标志连接起来的图表，用于展现数据的变化趋势。和全局设置type效果一样,表示折线图
            // 系列中的数据内容数组。数组项通常为具体的数据项。
            data: [{
                value: 1010,
                date: '2019年1月'
              },
              {
                value: 1020,
                date: '2019年2月'
              },
              {
                value: 1070,
                date: '2019年3月'
              },
              {
                value: 1001,
                date: '2019年4月'
              },
              {
                value: 1800,
                date: '2019年5月'
              },
              {
                value: 1200,
                date: '2019年6月'
              },
              {
                value: 1300,
                date: '2019年7月'
              },
              {
                value: 1030,
                date: '2019年8月'
              },
              {
                value: 1050,
                date: '2019年9月'
              },
              {
                value: 1800,
                date: '2019年10月'
              },
              {
                value: 1003,
                date: '2019年11月'
              },
              {
                value: 1070,
                date: '2019年12月'
              },
            ],
            // 折线条的样式
            lineStyle: {
              color: '#FFB600',
              width: 1
            },
            // 折线拐点的样式
            itemStyle: {
              normal: { // 静止时：
                color: '#FFB600',
              },
              emphasis: { // 鼠标经过时：
                color: '#377CFF',
              }
            },
            // symbol: 'circle', //拐点样式
            symbolSize: 5, //拐点大小
          }]
        }
      }
    },
    computed:{
      ...mapState(['selectLiteratureInfo']),
      ...mapGetters(['newSelectLiteratureInfo'])
    },
    methods:{
      ...mapActions(['getSelectLiteratureInfo'])
    },
    async mounted(){
      await this.getSelectLiteratureInfo()
    },
    watch:{
      newSelectLiteratureInfo(value){
        this.defaultOption.series[0].data = value
        console.log(newSelectLiteratureInfo);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "./commonCss.scss";
  .docs {
    padding: 16px;
    .contents {
      display: flex;
      justify-content: space-evenly;
      .summarize,.proportion,.sum {
        width: 390px;
        height: 380px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
    }
  }

</style>