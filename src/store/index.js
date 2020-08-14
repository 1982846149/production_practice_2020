import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    token:localStorage.getItem("Authorization")?localStorage.getItem("Authorization"):"",
    Uinfo:localStorage.getItem("Userinfo")?localStorage.getItem("Userinfo"):"",
    
  },
  mutations:{
    Set_token(state,Authorization){
     state.token = Authorization;
     localStorage.setItem("Authorization",Authorization);
    },
    Set_Uinfo(state,info){
      state.Uinfo = info;
      localStorage.setItem("Userinfo",info);
    },
    Clear_Token_and_Uinfo(state){
      localStorage.removeItem("Authorization");
      localStorage.removeItem("Userinfo");
      state.Uinfo = "";
      state.token = "";
    }
  
  },

})

export default store;

