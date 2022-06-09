<template>
  <div>
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import sideBar from '@/views/components/sideBar'

export default {
  name: 'template',
  components: {sideBar}
}
</script>

<style scoped>

</style>