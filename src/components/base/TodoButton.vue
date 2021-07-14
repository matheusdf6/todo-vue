<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TodoButton"
};
</script>

<style lang="sass" scoped>
button
  background: var(--secondary)
  color: var(--primaryLight)
  height: 42px
  padding: 0 36px
  border: none
  border-radius: 4px
  font-size: 16px
  cursor: pointer
  transition: filter 0.3s ease-in-out

  &:hover
    filter: brightness(1.1)
</style>
