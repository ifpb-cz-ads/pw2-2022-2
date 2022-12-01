<template>
  <div class="form-contato form-group">
    <p>
      <input placeholder="Nome" type="text" name="nome" class="form-control"
             v-model="nome" />
    </p>
    <p>
      <input placeholder="Telefone" name="telefone" class="form-control"
             v-model="telefone" />
    </p>
    <button v-on:click="adicionarContato" type="submit" class="btn btn-primary">
      Salvar
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nome: '',
        telefone: ''
      }
    },
    methods: {
      adicionarContato() {
        if (this.nome.trim() === '' || this.telefone.trim() === '') {
          return;
        }

        this.$emit('add-contato', {
          nome: this.nome,
          telefone: this.telefone,
        });

        this.nome = '';
        this.telefone = '';
      }
    }
  }
</script>
