import Vue from 'vue'
import './commons/plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './commons/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
