<template>
  <div class="todo-empty-message">
    <h3><slot></slot></h3>
  </div>
</template>

<script>
export default {
  name: "TodoEmptyMessage"
};
</script>

<style lang="sass">
.todo-empty-message
    padding: 16px
    background: var(--secondaryLight)

    h3
        color: var(--primaryLight)
</style>
