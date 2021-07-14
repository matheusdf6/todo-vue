<template>
  <article class="todo-accordion" :class="{ opened }">
    <div class="todo-accordion-title" @click="opened = !opened">
      <span>{{ title }}</span>
      <TodoIconButton
        class="todo-drawer-toogle"
        icon="expand"
        size="32px"
        color="var(--secondary)"
        fill="var(--primaryLight)"
      />
    </div>
    <div class="todo-accordion-text" ref="box" style="max-height: 0px">
      <div class="todo-accordion-text-inner" v-html="content"></div>
    </div>
  </article>
</template>

<script>
export default {
  name: "TodoDrawer",
  props: {
    title: String,
    content: String
  },
  data: function() {
    return {
      opened: false
    };
  },
  methods: {
    toggle: function() {}
  },
  watch: {
    opened: function() {
      this.$refs.box.style.maxHeight = this.opened
        ? this.$refs.box.scrollHeight + "px"
        : "0px";
      this.$refs.box.style.opacity = this.opened ? "1" : "0";
    }
  }
};
</script>

<style lang="sass">
.todo-accordion
  overflow: hidden
  border-radius: 4px
  background: var(--primary)

  .todo-accordion-title
    height: 48px
    display: flex
    align-items: center
    justify-content: flex-start
    font-weight: bold

    span
      flex: 1
      padding: 0 16px

    .todo-drawer-toogle
      margin: 0 16px
      transition: 0.3s all ease-in-out

  .todo-accordion-text
    line-height: 1.5
    transition: 0.3s max-height ease-in-out, 0.3s opacity ease-in-out

    .todo-accordion-text-inner
      padding: 16px

  &.opened
    .todo-drawer-toogle
      transform: rotate(180deg)
</style>
