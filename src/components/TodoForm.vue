<template>
  <form id="new-todo" @submit.prevent="handleSubmit">
    <h3>Adicionar uma nova tarefa:</h3>
    <TodoTextInput v-model.trim="title" maxlength="50" required>
      Título
    </TodoTextInput>
    <TodoTextarea v-model.trim="description" required>
      Descrição
    </TodoTextarea>
    <div class="form-footer">
      <TodoButton type="submit">Adicionar</TodoButton>
    </div>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  inject: ["notify"],
  data: function() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    handleSubmit: function() {
      if (this.title == "" || this.description == "") {
        this.notify("Preencha todos os campos");
        return false;
      }

      this.notify(`A tarefa '${this.title}' foi adicionado com sucesso!`);
      this.$emit("add-todo", {
        title: this.title,
        description: this.description
      });
      this.title = "";
      this.description = "";
    }
  }
};
</script>

<style lang="sass">
form#new-todo
  background: var(--primaryLight)
  border-radius: 12px

  h3
    font-size: 18px
    font-weight: 500
    color: var(--secondaryDark)
    margin-bottom: 24px


  .form-footer
    display: flex
    align-items: center
    justify-content: flex-end
    margin-top: 24px
</style>
