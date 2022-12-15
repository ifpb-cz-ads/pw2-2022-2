<template>
  <div class="container">
    <h1>Agenda</h1>

    <hr />

    <FormContato v-on:add-contato="salvarContato"></FormContato>

    <div class="list-group">
      <p v-if="numContatos <= 0">Adicione um contato na agenda...</p>
      <p v-else>Há {{ numContatos }} contatos na agenda.</p>

      <div class="list-group-item" v-for="(contato, index) in contatos" v-bind:key="index">
        <span class="nome_class"
          >Nome: <strong>{{ contato.nome }}</strong></span
        >
        <p>
          <span class="telefone_class">
            Telefone: <strong>{{ contato.telefone }}</strong>
          </span>
        </p>
        <div>
          <a href="#" title="Excluir" v-on:click.prevent="excluirContato(index)"> Excluir </a>
        </div>
      </div>
    </div>

    <hr />
  </div>
</template>

<script>
import FormContato from './FormContato';

export default {
  components: {
    FormContato,
  },
  data() {
    return {
      contatos: [],
    };
  },
  methods: {
    salvarContato(contato) {
      this.contatos.push(contato);
    },
    excluirContato(index) {
      this.contatos.splice(index, 1);
    },
  },
  computed: {
    numContatos() {
      return this.contatos.length;
    },
  },
  watch: {
    contatos(val) {
      console.log('val', val);
    },
  },
};
</script>
