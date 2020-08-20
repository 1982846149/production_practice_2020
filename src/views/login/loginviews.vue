<template>
  <div id="background">
  <div class="login_box">

    <login ></login>
  </div>
  </div>
</template>

<script>
  import login from "../../components/common/login_box/login_box";
  export default {
    name: "loginviews",
    components:{
      login,
    },
    data(){
      return{
       
  
        }
      }
    }
  
</script>


<style scoped>
  .login_box{
    position: absolute;
    right:200px;
    top:200px;
   
  }
#background{
  background: url('../../assets/img/homeview/login_background.jpeg') center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position:fixed;
  top:0;
  
}


</style>