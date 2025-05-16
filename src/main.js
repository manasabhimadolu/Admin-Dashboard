import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from './Views/DashBoard.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard,
    },
  ],
})

app.use(router)

app.use(naive)

app.mount('#app')
