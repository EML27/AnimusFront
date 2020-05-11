import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import LogIn from "@/components/LogIn";
import Register from "@/components/Register";
import TitleDetails from "@/components/TitleDetails"

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '',name: 'home', component:Home},
  {path: '/login',name: 'login',component: LogIn},
  {path: '/register', name: 'register',component: Register},
  {path: '/title/:kId',name: 'title',component: TitleDetails}
]

const router = new VueRouter({routes})

new Vue({
  render: h => h(App),
  router,
  components: {App},
  template: "<App/>",
}).$mount('#app')
