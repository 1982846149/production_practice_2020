import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter)
const loginviews = ()=>import("../views/login/loginviews")
const Mainview =()=>import("../views/main/Mainview")
const Order = ()=>import("../views/main/order/Order")
const TurnOver = ()=>import("../views/main/turnover/Turnover")
const  Showgoods = ()=>import("../views/main/showgood/Showgoods")

const routes = [
  {
    path:"",
    redirect:"/main/turnover"
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
      },
      {
        path:"showgoods",
        component:Showgoods,
      },
      

    ]
  }
  
]

const router = new VueRouter({
  routes,
  mode:"history"
})

router.beforeEach((to,from,next)=>{
    if (to.path==="/login"){
      next();
    }
    else{
      let _token_ = localStorage.getItem("Authorization");
      if (_token_===null || _token_ ===""){
        next("/login");
      }
      else{
        next()
      }
    }
})

export default router