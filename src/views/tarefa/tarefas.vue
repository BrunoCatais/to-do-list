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
            <v-btn width="10" outlined>X</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tarefas',
  data() {
    return {
      tarefas: [
        {
          id: 1,
          nome: 'Revisar conteudo de progweb',
          descricao: 'Aulas 1 a 6',
          etiqueta: 'Faculdade',
          data: '16/07',
          feito: false
        },
        {
          id: 2,
          nome: 'Fazer atividades de probest',
          descricao: 'As tarefas estão dispoíveis no ava',
          etiqueta: 'Faculdade',
          data: '30/07',
          feito: false
        },
        {
          id: 3,
          nome: 'Entregar trabalho de ed',
          descricao: 'O trabalho deve ser entregue até as 23h59',
          etiqueta: 'Dia-a-dia',
          data: '10/10',
          feito: false
        }
      ]
    }
  },
  methods: {
    redirectToNovaTarefa() {
      this.$router.push('/novaTarefa')
    }
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