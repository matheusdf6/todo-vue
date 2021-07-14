<template>
  <li>
    <TodoIconButton icon="delete" @click="deleteTodo" fill="#f44336" />
    <TodoDrawer
      class="todo-item-drawer"
      :title="todo.title"
      :content="todo.description"
    />
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object
  },
  methods: {
    deleteTodo: function() {
      this.$emit("delete-todo", this.todo.id);
    }
  }
};
</script>

<style lang="sass">
li
  display: flex
  align-items: flex-start
  justify-content: flex-start

  .todo-item-drawer
    flex: 1
    margin-left: 16px
</style>
