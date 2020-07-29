import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter)
const loginviews = ()=>import("../views/login/loginviews")
const routes = [
  {
    path:"",
    redirect:"/login"
  },
  {
    path:"/login",
    component:loginviews,
  }
  
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router