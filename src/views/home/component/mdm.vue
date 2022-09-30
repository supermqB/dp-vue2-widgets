<template>
  <div class="mdm">
    <div class="head">
      <span>主索引</span>
    </div>
    <div class="topContent boxShadow">
      <div class="title">
        <div class="spot"></div>
        <p>数量汇总</p>
      </div>
      <VueEcharts
        :option="defaultOption"
        :auto-resize="true"
        style="width: 100%; height: 100%;"
      ></VueEcharts>
    </div>
    <div class="bottonContent">
      <div class="bottonLeft boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>依据排行</p>
        </div>
        <p class="sourceTitle">疑似主要来源 (TOP10)</p>
        <div class="source">
          <div class="sourceMsg" v-for="(item,index) in selectIndexSource" :key="index">
            <i class="numIcon">{{ index + 1 }}</i>
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
      <div class="bottonRight boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>疑似任务汇总</p>
        </div>
        <div class="collect">
          <div class="taskEcharts">
            <VueEcharts
              :option="pieOption"
              :auto-resize="true"
              style="width:100%; height: 200px;"
            ></VueEcharts>
            <div class="completed">
              <p>已完成</p>
              <div class="count">
                <i>{{ 
                  dictSuspectList.length
                  ?dictSuspectList[0].completed
                  :''
                   }}</i>
                <span>条</span>
              </div>
            </div>
            <div class="undone">
              <p>待完成</p>
              <div class="count">
                <i>{{ 
                  dictSuspectList.length
                  ?dictSuspectList[0].unfinished 
                  :''
                  }}</i>
                <span>条</span>
              </div>
            </div>
          </div>
          <div class="rightSource">
            <div class="source">
              <p class="sourceTitle">疑似主要来源 (TOP10)</p>
              <div class="sourceMsg" v-for="(item,index) in dictSuspectSource" :key="index">
                <div class="ranking">{{ index + 1 }}</div>
                <p>{{ item.source }}</p>
                <span class="num">{{  item.count  }}</span>
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
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('home')
  export default {
    data() {
      return {
        defaultOption :{
          color: '#7ADFA7',
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(31,45,61,0.65)',
            borderColor: 'rgba(0,0,0,0)',
            axisPointer: {
              type: 'shadow'
            },
            textStyle: {
              color: '#FFF',
              fontSize: 12
            },
            formatter: params => {
              let dataStr = `<div><p style="font-weight:bold;margin:0 5px 5px;">${params[0].name}</p></div>`
              params.forEach(item => {
                  dataStr += `<div>
                    <div style="margin: 0 8px;">
                      <span style="display:inline-block;margin-right:5px;width:10px;height:10px;border-radius: 10px;background-color:${item.color};"></span>
                      <span>${item.data}
                      <span>${item.seriesName}</span>
                      </span>
                    </div>
                  </div>`
                })
                return dataStr
            }
          },
          grid: {
            top:'10%',
            left: '3%',
            right: '4%',
            bottom: '20%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data:[],
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                fontSize: 12,
                interval: 0,
                width: 42,
                formatter: function (params) {
                  var newParamsName = '';
                  var paramsNameNumber = params.length;
                  var provideNumber = 4;
                  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                  if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                      var tempStr = '';
                      var start = p * provideNumber;
                      var end = start + provideNumber;
                      if (p == rowNumber - 1) {
                        tempStr = params.substring(start, paramsNameNumber);
                      } else {
                        if (p >= 1) {
                          tempStr = `${params.substring(start, end-2)}...`;
                          newParamsName += tempStr;
                          break;
                        } else {
                          tempStr = params.substring(start, end);
                          if (p <= 2) {
                            tempStr += '\n';
                          }
                        }
                      }
                      newParamsName += tempStr;
                    }
                  } else {
                    newParamsName = params;
                  }
                  return newParamsName;
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '条',
              nameLocation: 'end',
              nameTextStyle: {
                align: 'right'
              }
            }
          ],
          series: [
            {
              name: '盒',
              type: 'bar',
              barWidth: '30%',
              data:[],
            }
          ]
        },
        pieOption :{
           color:[
            '#57CBFF',
            '#FECF7A'
            ],
          tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(31,45,61,0.65)',
            textStyle: {
              color: "#fff",
            },
            formatter: ({ data: { name, value } }) =>
              `${name} ${Number(value).toLocaleString()} 条`,
          },
          legend: {
            padding:[0,0,10,0],
            top: 'bottom',
            left:"center",
            textStyle:{
              fontSize:12,
              padding: [0, 0]
            },
            icon:'circle',
            itemGap: 20,
            itemHeight: 10,
            itemWidth: 10,
            itemStyle: {
              borderCap: "round",
            },
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              startAngle: 100,
              center:['50%','40%'],
              minAngle:5,
              itemStyle:{
                borderColor: '#fff',
                borderWidth: 2
              },
              radius: '55%',
              data: [
                { value: 120, name: '已完成',label:{color:'#57CBFF'} },
                { value: 10, name: '待完成',label:{color:'#FECF7A'} }
              ],
              labelLine: {
                length: 0,
              },
              label:{
                lineHeight:15,
                show:true,
                formatter:'{b}\n{d}%'
              }
            }
          ]
        }
      }
    },
    computed:{
      ...mapState(['selectIndexSource','dictSuspectList']),
      ...mapGetters(['newQueryIndexInfoY','newQueryIndexInfoX','dictSuspectSource'])
    },
    methods:{
      ...mapActions(['getQueryIndexInfo','getSelectIndexSource'])
    },
   async mounted(){
     await this.getQueryIndexInfo()
     await this.getSelectIndexSource()
    },
    watch:{
      newQueryIndexInfoX(value){
        this.defaultOption.xAxis[0].data = value
      },
       newQueryIndexInfoY(value){
        this.defaultOption.series[0].data = value
      }
    }
  }
</script>

<style scoped lang="scss" >
@import "./commonCss.scss";
@mixin ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
 .mdm {
    padding: 16px;
    .topContent {
      height: 353px;
      margin-right: 16px;
      box-sizing: border-box;
    }
    .bottonContent {
      box-sizing: border-box;
      margin: 16px 16px 0 0;
      height: 380px;
      display: flex;
      .bottonLeft,.bottonRight {
        flex: 1;
        width: 100%;
        overflow: hidden;
      }
      .sourceTitle {
        font:normal 600 14px normal ;
        padding: 18px 16px 0;
      }
      .bottonLeft {
        margin-right: 16px;
        .source {
          padding-left: 24px;
          .sourceMsg {
            background-color: #F4FAFF;
            height: 42px;
            width: 546px;
            border-radius: 21px;
            margin-top: 10px;
            padding: 7px 16px;
            box-sizing: border-box;
            display: flex;
            .numIcon {
              display: block;
              width: 22px;
              border-radius: 14px;
              font:italic 700 13px normal;
              color: #FFF;
              text-align: center;
              line-height: 22px;
              background-clip: padding-box;
              background-color:rgba(0,0,0,0.2);
              border: 3px solid rgba(0,0,0,0.06);
            }
            p {
              flex: 1;
              margin-left: 24px;
              line-height: 28px;
              @include ellipsis();

            }
          }
          :first-child .numIcon {
            background-color: #FF7966;
            border: 3px solid rgba(225,121,102,0.2);
          }
          :nth-child(2) .numIcon {
            background-color: #FFB33D;
            border: 3px solid rgba(255,179,61,0.20);
          }
          :nth-child(3) .numIcon {
            background-color: #71E590;
            border: 3px solid rgba(108,236,142,0.20);
          }
        }
      }
      .bottonRight {
        .collect{
          display: flex;
          height: 325px;
          .taskEcharts {
            padding: 16px;
            flex: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            .completed,.undone {
              height: 36px;
              width: 188px;
              border: 1px solid rgba(200,200,200,0.30);
              border-radius: 5px;
              height: 36px;
              width: 188px;
              display: flex;
              align-items: center;
              p {
                flex: 1;
                line-height: 22px;
                font:normal 600 13px normal;
                margin-left: 10px;
                color: #3EB9F0;
              }
              .count {
                height: 32px;
                width: 87px;
                // background-color: #cfe7ff;
                border-radius: 5px;
                box-sizing: border-box;
                display: flex;
                justify-content: right;
                align-items: center;
                i{
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
                color: #EFBE62;
              }
            }
          }
          .rightSource {
            flex: 3;
            .source {
              margin-top: 5px;
              display: flex;
              flex-direction: column;
              align-items: center;
              .sourceTitle {
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