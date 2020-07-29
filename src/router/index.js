import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter)
const loginviews = ()=>import("../views/login/loginviews")
const Mainview =()=>import("../views/main/Mainview")
const Statistic = ()=>import("../views/main/statistic/Statistic")
const Order = ()=>import("../views/main/order/Order")
const routes = [
  {
    path:"",
    redirect:"/login"
  },
  {
    path:"/login",
    component:loginviews,
  },
  {
    path:"/main",
    component:Mainview,
    children:[
      {
        path:"order",
        component:Order
      },
      {
        path:"statistic",
        component:Statistic
      }

    ]
  }
  
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router