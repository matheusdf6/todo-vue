const TodoInputMixin = {
  inheritAttrs: false,
  props: {
    value: String
  },
  computed: {
    inputListeners: function() {
      let vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit("input", event.target.value);
        }
      });
    }
  }
};

export default TodoInputMixin;
