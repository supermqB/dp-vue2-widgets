<template>
  <div class="search-form">
    <el-form ref="form" :model="model" @submit.native.prevent>
      <el-form-item
        v-for="cfg in _configs"
        :label="cfg.label"
        :prop="cfg.id"
        :key="cfg.id"
        :style="{ '--width': cfg.width }"
        :class="[cfg.width ? 'set-width' : '']"
      >
        <component
          :is="cfg.type"
          v-bind="cfg.elOptions"
          v-on="cfg.elEvents"
          v-model="model[cfg.id]"
        >
          <el-option
            v-for="(opt, index) in cfg.options"
            v-bind="opt"
            :key="index"
          >
          </el-option>
        </component>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { debounce } from 'lodash'
export default {
  name: 'DpCatalogSearchForm',
  props: {
    // configs: 表单配置项
    configs: {
      type: Array,
      default: () => []
    },
    // model: 表单数据对象
    model: {
      type: Object,
      default: () => ({})
    },
    // 触发change事件的防抖延迟时长(单位:毫秒ms)
    debounceWait: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      changeEvent: null, // change 事件函数
      data: [],
      loading: false
    }
  },
  computed: {
    _configs() {
      const defaultConfigItem = [
        {
          type: 'el-input',
          id: 'name',
          elOptions: {
            clearable: true,
            placeholder: '请输入'
          }
        }
      ]
      return this.configs.concat(defaultConfigItem)
    }
  },
  mounted() {
    this.changeEvent = debounce(v => {
      this.$emit('change', v)
    }, this.debounceWait)
  },
  watch: {
    model: {
      handler(v) {
        this.changeEvent(v)
      },
      deep: true
    }
  },
  methods: {
    resetFields() {
      this.$refs.form.resetFields()
    },
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid, errObj) => {
          resolve({ valid, errObj })
        })
      })
    },
    clearValidate() {
      this.$refs.form.clearValidate()
    }
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  width: 100%;
  height: 40px;
  overflow: hidden;
}
.el-form {
  display: flex;
  ::v-deep {
    .el-form-item {
      flex: 1;
      margin-bottom: 0;
      padding-right: 6px;

      &.set-width {
        flex: 0 0 var(--width);
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }
}
</style>
