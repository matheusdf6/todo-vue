<template>
  <div id="app">
    <div class="app-container">
      <div class="app-grid">
        <TodoListHeader userName="Matheus" class="header" />
        <aside>
          <TodoForm @add-todo="handleAddTodo" />
        </aside>
        <main>
          <TodoList
            v-if="todos.length > 0"
            :todos="todos"
            @delete-todo="handleDeleteTodo"
          />
          <TodoListFooter v-if="todos.length > 0" />
          <TodoEmptyMessage v-else
            >Nenhuma tarefa foi encontrada &#128553;</TodoEmptyMessage
          >
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";
import TodoListHeader from "./components/TodoListHeader.vue";
import TodoListFooter from "./components/TodoListFooter.vue";
import TodoEmptyMessage from "./components/TodoEmptyMessage.vue";

import TodoRepository from "./repositories/TodoRepository.js";
import base from "./components/base";

import "./index.css";

const components = {
  ...base,
  TodoList,
  TodoForm,
  TodoListHeader,
  TodoListFooter,
  TodoEmptyMessage
};

console.log(components);

export default {
  name: "App",
  components,
  data: function() {
    return {
      todos: []
    };
  },
  methods: {
    handleDeleteTodo: function(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    handleCleanAll: function() {
      this.todos = [];
    },
    handleAddTodo: function(todo) {
      let maxId = this.todos.map(todo => todo.id).max();
      this.todos.push({ ...todo, id: maxId + 1 });
    }
  },
  created: function() {
    this.todos = TodoRepository.getAll();
  },
  watch: {
    todos: function() {
      TodoRepository.save(this.todos);
    }
  },
  provide: {
    notify: function(message) {
      console.log(message);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

.app-container {
  width: 100%;
  max-width: 1202px;
  margin: 0 auto;
  padding: 0 15px;
}

.app-grid {
  display: grid;
  grid-template:
    "header header" 80px
    "aside main" 1fr / 1fr 2fr;
  row-gap: 24px;
  column-gap: 36px;
}

.header {
  grid-area: header;
}

aside {
  grid-area: aside;
}

main {
  grid-area: main;
}
</style>
