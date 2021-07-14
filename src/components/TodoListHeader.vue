<template>
  <header>
    <h1>Olá {{ userName }}</h1>
    <h3>Essas são as suas tarefas e atividades cadastradas &#128204;</h3>
  </header>
</template>

<script>
export default {
  name: "TodoListHeader",
  props: {
    userName: String
  }
};
</script>

<style lang="sass">
header
  padding: 24px 32px
  border-radius: 8px

  h1
    margin: 0
    font-size: 32px
    font-weight: 700

  h3
    font-size: 20px
    font-weight: 500
    margin-top: 8px
</style>
