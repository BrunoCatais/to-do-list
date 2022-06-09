<template>
  <div class="w3-sidebar w3-bar-block app-sidebar"
       style="width:15%">
    <img src="img/ufms.png" width="150" height="150" class="mt-6">
    <a @click="redirectToListas()" class="sidebar-btn mt-4">
      <h3 class=" color-white">To Do List</h3>
    </a>
    <hr style="color: white">
    <a @click="redirectToNovaTarefa()" class="sidebar-btn mb-5">
      <span class="w3-button color-white">Nova tarefa</span>
    </a>
    <a @click="redirectToNovaLista()" class="sidebar-btn mb-5">
      <span class="w3-button color-white">Nova lista</span>
    </a>
    <a @click="redirectToListas()" class="sidebar-btn mb-5">
      <span class="w3-button color-white">Listas</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  methods: {
    redirectToNovaTarefa() {
      this.$router.push('/novaTarefa')
    },
    redirectToNovaLista() {
      this.$router.push('/novaLista')
    },
    redirectToListas() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.sidebar-btn {
  text-decoration: none;
}

.color-white {
  color: white;
  display: inline;
}

.app-sidebar {
  color: #000 !important;
  background-color: #0089b8 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>