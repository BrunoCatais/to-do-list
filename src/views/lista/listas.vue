<template>
  <div style="margin-left: 15%">
    <div class="show-listas-container">
      <div class="header mb-2">
        <h2>Listas</h2>
        <v-btn outlined @click="redirectToNovaLista()" color="primary">Nova lista</v-btn>
      </div>

      <v-card v-for="lista in listas" :key="lista.id" hover outlined
              @click="redirectToListaTarefa()"
              class="pa-4 mb-3">
        <v-row align="center">
          <v-col cols="11">
            <span class="w3-large">{{ lista.nome }}</span><br>
            <span>{{ lista.descricao }}</span>
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
  name: 'listas',
  data() {
    return {
      listas: [
        {
          id: 1,
          nome: 'Estudo',
          descricao: 'Lista pra lembrar as coisas que preciso estudar pra semana que vem'
        },
        {
          id: 2,
          nome: 'Trabalho',
          descricao: 'Coisa que tenho que fazer para o trabalho'
        }
      ]
    }
  },
  methods: {
    redirectToListaTarefa() {
      this.$router.push('/tarefas')
    },
    redirectToNovaLista() {
      this.$router.push('/novaLista')
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