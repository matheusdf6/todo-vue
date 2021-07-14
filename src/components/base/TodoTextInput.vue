<template>
  <div class="todo-form-input todo-form-input-text">
    <label><slot /></label>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-bind="$attrs"
      v-on="inputListeners"
    />
  </div>
</template>

<script>
import TodoInputMixin from "../../mixins/TodoInputMixin";

export default {
  name: "TodoInputMixin",
  mixins: [TodoInputMixin]
};
</script>

<style lang="sass">

.todo-form-input
  display: flex
  flex-direction: column

  input
    border: none
    box-shadow: none
    outline: none
    background: var(--primary)
    border-radius: 4px
    padding: 8px
    height: 48px
  label
    font-weight: 400
    margin-bottom: 4px
  & + .todo-form-input
    margin-top: 16px
</style>
