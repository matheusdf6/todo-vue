<template>
  <div class="todo-form-input todo-form-input-textarea">
    <label><slot /></label>
    <textarea
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-bind="$attrs"
      v-on="inputListeners"
    ></textarea>
  </div>
</template>

<script>
import TodoInputMixin from "../../mixins/TodoInputMixin";

export default {
  name: "TodoTextarea",
  mixins: [TodoInputMixin]
};
</script>

<style lang="sass">

.todo-form-input
  display: flex
  flex-direction: column

  textarea
    border: none
    box-shadow: none
    outline: none
    background: var(--primary)
    border-radius: 8px
    padding: 8px
    height: 144px
    resize: none
  label
    font-weight: 500
    margin-bottom: 4px
  & + .todo-form-input
    margin-top: 16px
</style>
