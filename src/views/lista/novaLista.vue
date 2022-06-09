<template>
  <div class="w3-container" style="margin-left: 15%">
    <div class="create-tarefa-container">
      <h2 class="novo-header">Nova lista</h2>

      <div class="w3-cell input-cell">
        <label for="nome">Nome da lista:</label>
        <v-text-field :value="nome" outlined hide-details class="mb-3"></v-text-field>

        <label for="descricao">Descrição:</label>
        <v-textarea outlined height="240" v-model="descricao" style="width:500px;"></v-textarea>

        <v-btn outlined class="salvar-btn" color="primary">SALVAR</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'novaLista',
  data() {
    return {
      nome: '',
      descricao: ''
    }
  }
}
</script>

<style scoped>

span, h2 {
  font-family: Roboto, sans-serif;
}

.salvar-btn {
  margin-left: 40%;
}

.input-cell {
  padding: 40px;
}

.novo-header {
  padding-left: 40px;
}

.create-tarefa-container {
  margin-top: 10%;
  margin-left: 25%;
  position: relative;
}
</style>