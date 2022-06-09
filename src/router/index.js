import Vue from 'vue'
import VueRouter from 'vue-router'
import novaTarefa from '@/views/tarefa/novaTarefa'
import tarefas from '@/views/tarefa/tarefas'
import novaLista from '@/views/lista/novaLista'
import listas from '@/views/lista/listas'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Listas',
    component: listas,
  },
  {
    path: '/novaTarefa',
    name: 'NovaTarefa',
    component: novaTarefa
  },
  {
    path: '/tarefas',
    name: 'Tarefas',
    component:tarefas
  },
  {
    path: '/novaLista',
    name: 'NovaLista',
    component: novaLista
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
