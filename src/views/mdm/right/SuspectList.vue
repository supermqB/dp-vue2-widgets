<template>
  <div class="suspect_list_wrapper">
    <div class="top_title">疑似列表</div>
    <div>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item
          v-for="(suspect, index) in listData"
          :title="suspect.title"
          :name="'item' + index"
          :key="'item' + index"
          class="propList"
        >
          <div
            v-for="field in suspect.fields"
            :key="field.name"
            class="propItem"
          >
            <div class="title">【{{ field.name }}】</div>
            <div class="content">{{ field.value }}</div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'item0',
      listData: [
        {
          title: '阿司匹林（华山HIS）',
          fields: [
            {
              name: '基本信息',
              value:
                '阿司匹林肠溶片〔Aspirin,2-（乙酰氧基）苯甲酸，乙酰水杨酸〕'
            },
            { name: '类型信息', value: '西药，解热镇痛药，抗风湿药' },
            {
              name: '规格/生产信息',
              value:
                '片剂，0.3g，24个月，国药准字H15020766，86903880000019，呼伦贝尔康益药业有限公司'
            },
            {
              name: '医保信息',
              value: '医保，甲等，阿司匹林肠溶片，片剂'
            },
            {
              name: '其它信息',
              value: '处方药，非基药，非抗菌药'
            }
          ]
        },
        {
          title: '阿司匹林（华山HIS）',
          fields: [
            {
              name: '基本信息',
              value:
                '阿司匹林肠溶片〔Aspirin,2-（乙酰氧基）苯甲酸，乙酰水杨酸〕'
            },
            { name: '类型信息', value: '西药，解热镇痛药，抗风湿药' },
            {
              name: '规格/生产信息',
              value:
                '片剂，0.3g，24个月，国药准字H15020766，86903880000019，呼伦贝尔康益药业有限公司'
            },
            {
              name: '医保信息',
              value: '医保，甲等，阿司匹林肠溶片，片剂'
            },
            {
              name: '其它信息',
              value: '处方药，非基药，非抗菌药'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep.suspect_list_wrapper {
  .top_title {
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.65);
    padding: 0 6px;
    box-sizing: border-box;
  }
  .el-collapse-item__header {
    height: 36px;
    padding-left: 6px;
    &::before {
      height: 10px;
      width: 3px;
      background-color: #1890ff;
      content: '';
      margin-right: 5px;
      border-radius: 16px;
    }
  }
  .el-collapse-item__content{
      padding-bottom: 17px;
  }
  .propList {
    .propItem {
      .title {
        background: #eeeeee;
        margin: 6px;
      }
      .content {
        margin: 8px 6px 8px 14px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.65);
        line-height: 18px;
      }
    }
  }
}
</style>
