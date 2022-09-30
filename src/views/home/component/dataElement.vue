<template>
  <div class="dataElement">
    <div class="head">
      <span>数据元</span>
    </div>
    <div class="body">
      <div class="right boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>分类汇总</p>
        </div>
        <div class="content">
            <div class="tag" v-for="(item,index) in newDataElementClassify.length?newDataElementClassify:9" :key="index">
              <div class="ribbon"></div>
              <div class="tagCountent">
                <p>{{ item.name }}</p>
                <div class="count">
                  <i>{{ item.value }}</i>
                  <span>条</span>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="left boxShadow">
        <div class="title">
          <div class="spot"></div>
          <p>医院种类比例</p>
        </div>
        <VueEcharts
          :option="defaultOption"
          :auto-resize="true"
          style="width: 100%; height: 85%;"></VueEcharts>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('home')
import Title from '../common/title.vue'
  export default {
    async created(){
       await this.getDataElementClassify()
        console.log(this.newDataElementClassify,6666);
     },
    data() {
      return {
        defaultOption : {
          color: [
            "#90EAFF",
            "#43C9F9",
            "#8289FF",
            "#47AEFF",
            "#C3ED7C",
            "#FFDC52",
            "#4DB9FF",
            "#FF8888",
            "#72E393",
          ],
          tooltip: {
            trigger: 'item',
            backgroundColor: "rgba(6, 57, 146, 0.86)",
            borderColor: "#0091FF",
            textStyle: {
              color: "#fff",
            },
            formatter: ({ data: { name, value } }) =>
              `${name} ${Number(value).toLocaleString()} 条`,
          },
          legend: {
            top: 'bottom',
            textStyle:{
              fontSize:11
            },
            left:"center",
            icon:'circle',
            itemGap: 20,
            itemHeight: 20,
            itemWidth: 12,
            textStyle: {
              padding: [0, 0],
            },
            itemStyle: {
              borderCap: "round",
            },
          },
          series: [
            {
              name: "Ringpie Chart",
              type: 'pie',
              radius: '50%',
              minAngle:5,
              center:['50%','40%'],
              data: [],
              labelLine: {
                length: 15,
                smooth:true,
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
              },
              label:{
                show:true,
                formatter:'{b}: {d}%'
              },

           
            }
          ]
        }
      }
    },
    computed:{
      ...mapGetters(['newDataElementClassify'])
    },
    methods:{
      ...mapActions(['getDataElementClassify'])
    },
    components:{
      Title
    },
    watch:{
      newDataElementClassify(value){
        this.defaultOption.series[0].data = value
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "./commonCss.scss";
  .dataElement {
    padding: 16px;
    .body {
      font-weight: 600;
      display: flex;
      .right,.left {
        margin-right: 16px;
        // width: 594px;
        flex: 1;
        // height: 387px;
      }
      .right {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .content {
          display: flex;
          flex: 1;
          flex-wrap: wrap;
          // height: 0;
          // flex-flow: column wrap;
          justify-content: space-around;
          &::after {
            width: 272px;
            height: 40px;
            content:'';
            margin: 11px;
          }
          .tag {
            border: 1px solid rgba($color: #C8C8C8, $alpha: 0.5);
            width: 272px;
            height: 40px;
            position: relative;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            margin: 10px;
  
            .ribbon {
              position: absolute;
              transform: translate(-1px,8px);
              background-color: #1890FF;
              width: 4px;
              height: 24px;
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
            }
            .tagCountent{
              display: flex;
              height: 100%;
              align-items: center;
              padding-right: 4px;
               p {
                flex: 1;
                line-height: 22px;
                font-size: 13px;
                margin-left: 19px;
              }
              .count {
                height: 32px;
                width: 87px;
                background-color: #cfe7ff;
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
          }
        }
      }
      .left {
        flex: 1;
        align-items: center;
        padding-bottom: 16px;
        box-sizing: border-box;
        // height: 387px;
        // min-height: 387px;
      }
    }
  }
</style>
