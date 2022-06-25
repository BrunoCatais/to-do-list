<template>
  <div style="margin-left: 15%">
    <div class="show-listas-container">
      <div class="header mb-2">
        <h2>Listas</h2>
        <div class="search-wrapper">
          <v-text-field type="text" v-model="search" placeholder="Pesquisar Listas.."/>
          
        </div>
        <v-btn outlined @click="redirectToNovaLista()" color="primary">Nova lista</v-btn>
      </div>

      <v-card v-for="lista in filteredList" :key="lista.id" outlined
              class="pa-4 mb-3">
        <v-row align="center">
          <v-col cols="9">
            <span class="w3-large">{{ lista.nome }}</span><br>
            <span>{{ lista.descricao }}</span>
          </v-col>
          <v-col class="pr-2 pl-2">
            <v-btn outlined width="10" color="green" @click="redirectToListaTarefa(lista.id)">ENTRAR</v-btn>
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
      search: '',
      listas: []
    }
  },
  methods: {
    async deleteLista(id) {
      await dbClient.deleteLista(id)
      this.listas = await dbClient.findListas()
    },
    redirectToListaTarefa(listaId) {
      this.$router.push('/tarefas?listaId=' + listaId)
    },
    redirectToNovaLista() {
      this.$router.push('/novaLista')
    }
  },
   computed: {
    filteredList() {
      return this.listas.filter(lista => {
        return lista.nome.toLowerCase().includes(this.search.toLowerCase())
      })
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