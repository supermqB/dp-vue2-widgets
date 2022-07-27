<template>
  <div class="task-aside">
    <Title class="task-aside-title" />
    <Form class="task-aside-form"  />
    <List class="task-aside-list"  />
  </div>
</template>

<script>
import Title from './Title'
import Form from './Form'
import List from './List'
export default {
  name: 'TaskAssignAside',
  components: { Title, Form, List }
}
</script>
<style lang="scss" scoped>
.task-aside {
  display: flex;
  flex-direction: column;
  &-title {
    display: flex;
  }

  &-form {
    display: flex;
  }

  &-list {
    display: flex;
    flex: 1;
  }

}
</style>