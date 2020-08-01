import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter)
const loginviews = ()=>import("../views/login/loginviews")
const Mainview =()=>import("../views/main/Mainview")
const Order = ()=>import("../views/main/order/Order")
const TurnOver = ()=>import("../views/main/turnover/Turnover")
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
        path:"",
        redirect:"turnover",
      }
        ,{
        path:"turnover",
        component:TurnOver
      },
      {
        path:"order",
        component:Order
      }

    ]
  }
  
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router