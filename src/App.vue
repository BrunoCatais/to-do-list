<template>
  <v-app>
    <v-main>
      <side-bar></side-bar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import sideBar from '@/views/components/sideBar'

export default {
  name: 'App',
  components: {sideBar}
}
</script>
