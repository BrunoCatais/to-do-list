<template>
  <div style="margin-left: 15%">
    <div class="show-listas-container">
      <div class="header mb-2">
        <h2>Listas</h2>
        <v-btn outlined @click="redirectToNovaLista()" color="primary">Nova lista</v-btn>
      </div>

      <v-card v-for="lista in listas" :key="lista.id" outlined
              class="pa-4 mb-3">
        <v-row align="center">
          <v-col cols="11">
            <span class="w3-large">{{ lista.nome }}</span><br>
            <span>{{ lista.descricao }}</span>
          </v-col>
          <v-col>
            <v-btn width="10" @click="deleteLista(lista.id)" outlined>X</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import dbClient from '@/commons/apiclient/dbClient'

export default {
  name: 'listas',
  data() {
    return {
      listas: []
    }
  },
  methods: {
    async deleteLista(id) {
      await dbClient.deleteLista(id)
      this.listas = await dbClient.findListas()
    },
    redirectToListaTarefa() {
      this.$router.push('/tarefas')
    },
    redirectToNovaLista() {
      this.$router.push('/novaLista')
    }
  },
  async created() {
    this.listas = await dbClient.findListas()
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