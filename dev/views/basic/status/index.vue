<template>
  <div class="basic-status">
    <div class="default">
      <dp-status type="start">新任务/待分配</dp-status>

      <dp-status type="process">审核/加工</dp-status>

      <dp-status type="recall">已撤回</dp-status>

      <dp-status type="done">已审核/已加工</dp-status>
    </div>

    <div class="medium">
      <dp-status type="start" size="medium">新任务/待分配</dp-status>

      <dp-status type="process" size="medium">审核/加工</dp-status>

      <dp-status type="recall" size="medium">已撤回</dp-status>

      <dp-status type="done" size="medium">已审核/已加工</dp-status>
    </div>

    <div class="big">
      <dp-status type="start" size="big">新任务/待分配</dp-status>

      <dp-status type="process" size="big">审核/加工</dp-status>

      <dp-status type="recall" size="big">已撤回</dp-status>

      <dp-status type="done" size="big">已审核/已加工</dp-status>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.basic-status {
  /* height: 100px; */
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
