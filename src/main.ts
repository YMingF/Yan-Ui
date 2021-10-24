import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import test from './components/test.vue'
import test2 from './components/test2.vue'
import {createWebHashHistory,createRouter}  from 'vue-router'

const history=createWebHashHistory()
const router=createRouter({
  history:history,
  routes:[
    {path:'/',component:test},
    {path:'/x',component:test2}
  ]
})
const app=createApp(App)
app.use(router)
app.mount('#app')
