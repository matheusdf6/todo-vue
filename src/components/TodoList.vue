<template>
  <div class="todo-list">
    <ul>
      <li
        is="TodoItem"
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
        @delete-todo="deleteTodo"
      ></li>
    </ul>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  props: {
    todos: Array
  },
  methods: {
    deleteTodo: function(id) {
      this.$emit("delete-todo", id);
    }
  },
  components: {
    TodoItem
  }
};
</script>

<style lang="sass">
.todo-list
  li + li
    margin-top: 16px
</style>
