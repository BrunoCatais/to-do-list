<template>
  <div class="w3-container" style="margin-left: 15%">
    <div class="create-tarefa-container">
      <h2 class="novo-header">Nova tarefa</h2>
      <v-row>
        <v-col class="input-cell" cols="5">
          <span>Nome da tarefa:</span>
          <v-text-field v-model="nome" outlined hide-details class="mb-3"></v-text-field>
          <span>Data de limite:</span>
          <input class="w3-input w3-border w3-round mb-3" type="date" v-model="data" style="height: 55px">
          <span>Etiqueta:</span>
          <v-select outlined :items="etiquetas" v-model="etiquetaSelecionada"></v-select>
        </v-col>
        <v-col class="input-cell">
          <span>Descrição:</span>
          <v-textarea outlined height="240" v-model="descricao" style="width:500px;"></v-textarea>
        </v-col>
      </v-row>
      <v-btn outlined @click="insertTarefa()" class="salvar-btn" color="primary">SALVAR</v-btn>
    </div>
  </div>
</template>

<script>
import dbClient from '@/commons/apiclient/dbClient'

export default {
  name: 'novaTarefa',
  data() {
    return {
      nome: '',
      data: '',
      etiquetas: ['Faculdade', 'Trabalho', 'Dia-a-dia'],
      etiquetaSelecionada: '',
      descricao: '',
      listaId: null
    }
  },
  methods: {
    insertTarefa() {
      dbClient.insertTarefas(parseInt(this.listaId), this.nome, this.data, this.etiquetaSelecionada, this.descricao)
      console.log(this.listaId, this.nome, this.data, this.etiquetaSelecionada, this.descricao)
      this.$router.push('/tarefas?listaId=' + this.listaId)
    }
  },
  mounted() {
    this.listaId = this.$route.query.listaId
  }
}
</script>

<style scoped>

span, h2 {
  font-family: Roboto, sans-serif;
}

.salvar-btn {
  margin-left: 37%;
}

.input-cell {
  padding: 40px;
}

.novo-header {
  padding-left: 40px;
}

.create-tarefa-container {
  height: 500px;
  width: 70%;
  margin-top: 10%;
  margin-left: 15%;
  position: relative;
}
</style>