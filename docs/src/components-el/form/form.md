# Form 表单

::: demo

```html

  <dp-form ref="form" :model="form" labdp-width="80px">
    <dp-form-item label="活动名称">
      <dp-input v-model="form.name"></dp-input>
    </dp-form-item>
    <dp-form-item label="活动区域">
      <dp-select v-model="form.region" placeholder="请选择活动区域">
        <dp-option label="区域一" value="shanghai"></dp-option>
        <dp-option label="区域二" value="beijing"></dp-option>
      </dp-select>
    </dp-form-item>
    <dp-form-item label="活动时间">
      <dp-col :span="11">
        <dp-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%;"
        ></dp-date-picker>
      </dp-col>
      <dp-col class="line" :span="2">-</dp-col>
      <dp-col :span="11">
        <dp-time-picker
          placeholder="选择时间"
          v-model="form.date2"
          style="width: 100%;"
        ></dp-time-picker>
      </dp-col>
    </dp-form-item>
    <dp-form-item label="即时配送">
      <dp-switch v-model="form.delivery"></dp-switch>
    </dp-form-item>
    <dp-form-item label="活动性质">
      <dp-checkbox-group v-model="form.type">
        <dp-checkbox label="美食/餐厅线上活动" name="type"></dp-checkbox>
        <dp-checkbox label="地推活动" name="type"></dp-checkbox>
        <dp-checkbox label="线下主题活动" name="type"></dp-checkbox>
        <dp-checkbox label="单纯品牌曝光" name="type"></dp-checkbox>
      </dp-checkbox-group>
    </dp-form-item>
    <dp-form-item label="特殊资源">
      <dp-radio-group v-model="form.resource">
        <dp-radio label="线上品牌商赞助"></dp-radio>
        <dp-radio label="线下场地免费"></dp-radio>
      </dp-radio-group>
    </dp-form-item>
    <dp-form-item label="活动形式">
      <dp-input type="textarea" v-model="form.desc"></dp-input>
    </dp-form-item>
    <dp-form-item>
      <dp-button type="primary" @click="onSubmit">立即创建</dp-button>
      <dp-button>取消</dp-button>
    </dp-form-item>
  </dp-form>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
    },
  }
</script>
```

:::
