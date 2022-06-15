<template>
  <div class="w3-container" style="margin-left: 15%">
    <div class="show-listas-container">
      <div class="header mb-3">
        <h2>Tarefas</h2>
        <v-btn outlined @click="redirectToNovaTarefa()" color="primary">Nova tarefa</v-btn>
      </div>
      <v-card outlined v-for="tarefa in tarefas" :key="tarefa.id" class="pa-2 mb-4">
        <v-row align="center">
          <v-col cols="1" class="pa-0 ml-5">
            <v-checkbox v-model="tarefa.feito"></v-checkbox>
          </v-col>
          <v-col cols="7">
            <span class="w3-large ml-n13">{{ tarefa.nome }}</span><br>
            <span class="ml-n12 text--secondary">{{ tarefa.descricao }}</span>
          </v-col>
          <v-col>
            <span>{{ tarefa.etiqueta }}</span>
          </v-col>
          <v-col>
            <span>{{ tarefa.data }}</span>
          </v-col>
          <v-col>
            <v-btn width="10" outlined @click="deleteTarefaByTarefaAndListaId(tarefa.id)">X</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import dbClient from '@/commons/apiclient/dbClient'

export default {
  name: 'tarefas',
  data() {
    return {
      tarefas: [],
      listaId: null
    }
  },
  methods: {
    redirectToNovaTarefa() {
      this.$router.push('/novaTarefa?listaId=' + this.listaId)
    },
    async deleteTarefaByTarefaAndListaId(tarefaId) {
      dbClient.deleteTarefaByTarefaAndListaId(tarefaId, this.listaId)
      this.tarefas = await dbClient.findTarefasByListaId(this.listaId)
    }
  },
  async created() {
    this.listaId = this.$route.query.listaId
    this.tarefas = await dbClient.findTarefasByListaId(this.listaId)
  }
}
</script>

<style scoped>
textarea {
  resize: none;
}

span, h2 {
  font-family: Roboto, sans-serif;
}

.show-listas-container {
  height: 500px;
  width: 70%;
  margin-top: 10%;
  margin-left: 15%;
  position: relative;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>