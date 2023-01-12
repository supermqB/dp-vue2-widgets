<template>
  <div class="wrapper">
    <div class="button-page">
      <div class="button-page__line">
        <dp-subtitle text="主要按钮" />
        <div>
          <el-button type="primary">两字</el-button>
          <el-button type="primary" plain>两字</el-button>
        </div>
        <div>
          <el-button type="primary" plain>三个字</el-button>
          <el-button type="primary" plain>四个文字</el-button>
          <el-button type="primary" plain>五个长文字</el-button>
        </div>
      </div>

      <div class="button-page__line">
        <dp-subtitle text="主要按钮-禁用状态" />
        <div><el-button type="primary" plain disabled>两字</el-button></div>
        <div>
          <el-button type="primary" plain disabled>三个字</el-button>
          <el-button type="primary" plain disabled>四个文字</el-button>
          <el-button type="primary" plain disabled>五个长文字</el-button>
        </div>
      </div>

      <div class="button-page__line">
        <dp-subtitle text="次要按钮" />
        <div><el-button>两字</el-button><el-button plain>两字</el-button></div>
        <div>
          <el-button type="default" plain>三个字</el-button>
          <el-button type="default" plain>四个文字</el-button>
          <el-button type="default" plain>五个长文字</el-button>
        </div>
      </div>

      <div class="button-page__line">
        <dp-subtitle text="次要按钮-禁用状态" />
        <div><el-button plain disabled>两字</el-button></div>
        <div>
          <el-button plain disabled>三个字</el-button>
          <el-button plain disabled>四个文字</el-button>
          <el-button plain disabled>五个长文字</el-button>
        </div>
      </div>

      <div class="button-page__line">
        <dp-subtitle text="圆角按钮" />
        <div>
          <el-button type="primary" round>两字</el-button>
          <el-button type="primary" circle>两</el-button>
        </div>
        <div>
          <el-button type="primary" circle>三个字</el-button>
          <el-button type="primary" circle>四个文字</el-button>
          <el-button type="primary" circle>五个长文字</el-button>
        </div>
      </div>

      <div class="button-page__line">
        <dp-subtitle text="按钮组(dp-button-group)" />
        <div class="button-group-line">
          <dp-button-group
            :btnCfgs="[
              [
                { name: 'pass', label: '通过' },
                { name: 'noPass', label: '不通过' }
              ],
              [
                { name: 'add', label: '新增' },
                { name: 'enable', label: '启用' }
              ]
            ]"
          />
        </div>
        <div class="button-group-line">
          <dp-button-group
            :btnCfgs="[
              [
                { name: 'pass', label: '通过', props: { disabled: true } },
                { name: 'noPass', label: '不通过', props: { disabled: true } }
              ],
              [
                { name: 'add', label: '新增', props: { disabled: true } },
                { name: 'enable', label: '启用', props: { disabled: true } }
              ]
            ]"
          />
        </div>
      </div>

      <div class="button-page__line">
        <dp-subtitle text="带图标按钮(dp-icon-button)" />
        <div>
          <dp-icon-button text="检索" :icon="searchIcon" @click="handleClick" />
          <dp-icon-button
            text="检索"
            :icon="searchIcon"
            @click="handleClick"
            disabled
          />
        </div>
        <div>
          <dp-icon-button
            text="三个字"
            :icon="searchIcon"
            @click="handleClick"
          />
          <dp-icon-button
            text="三个字"
            :icon="searchIcon"
            @click="handleClick"
            disabled
          />
        </div>
      </div>

      <div class="button-page__line">
        <dp-subtitle text="检索框(dp-search-bar)" />
        <div class="search-bar">
          <dp-search-bar
            class="searchBar"
            placeholder="请输入"
            v-model="form"
            @onSearch="onSearchCtlg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchIcon from '@/assets/images/icons/filter.png'
export default {
  data() {
    return {
      searchIcon,
      form: {
        searchText: '',
        filter: ''
      }
    }
  },
  methods: {
    handleClick() {
      console.log('==click==')
    },
    onSearchCtlg({ searchText }) {
      this.form.filter = searchText
      console.log({ onSearchCtlg: this.form })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  overflow: auto;
}
.button-page {
  padding: 40px;
  &__line {
    line-height: 40px;
  }
  .button-group-line {
    height: 40px;
  }
  .search-bar {
    height: 40px;
  }
}
</style>
