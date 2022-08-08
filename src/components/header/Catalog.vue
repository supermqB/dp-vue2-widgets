<template>
  <div class="catalogTitleWrap">
    <h3>{{ title }}</h3>
    <div class="buttons">
      <img :src="ADDICON" @click="click('add')"/>
      <img :src="EDITICON" @click="click('edit')"/>
      <img v-if="hasRun" :src="RUNICON" @click="click('run')" />
    </div>
  </div>
</template>

<script>
const ADDICON = require("@/assets/images/common/icons/add.png")
const EDITICON = require("@/assets/images/common/icons/edit.png")
const RUNICON = require("@/assets/images/common/icons/run.png")
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    hasRun: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.ADDICON = ADDICON
    this.EDITICON = EDITICON
    this.RUNICON = RUNICON
  },
  methods: {
    click(type) {
      this.$emit(type)
    }
  }
}
</script>

<style scoped lang="scss">
.catalogTitleWrap {
  height: 41px;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E5E5E5;
  h3 {
    font-size: 16px;
    font-weight: normal;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      margin: 0 4px;
      cursor: pointer;
    }
  }
}
</style>
