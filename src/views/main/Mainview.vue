<template>
  <div class="main">
  <Navbar></Navbar>
  <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from "../../components/content/nav_bar/Navbar";
  export default {
    name: "Mainview",
    components:{
      Navbar,
    }
  }
</script>

<style scoped>
.main{
  display: flex;
}
</style>