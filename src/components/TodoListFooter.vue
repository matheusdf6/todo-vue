<template>
  <div class="todo-list-footer">
    <TodoButton @click="$emit('clean-all')">Limpar todos</TodoButton>
  </div>
</template>

<script>
export default {
  name: "TodoListFooter"
};
</script>

<style lang="sass">
.todo-list-footer
  margin-top: 24px
  display: flex
  align-items: center
  justify-content: flex-end
</style>
