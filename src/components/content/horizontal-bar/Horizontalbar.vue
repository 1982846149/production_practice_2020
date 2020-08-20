<template>
  <div>
    <Menu mode="horizontal" theme="dark">
      <div class="layout-logo"></div>
      <div class="layout-navi">
        <MenuItem  name="userid" class="navi-item1">
          <Icon>
          </Icon>
       {{this.$store.state.Uinfo}}
        </MenuItem>
        <MenuItem   class="navi-item2">
          <span  @click="Logoff">注销</span>
         
        </MenuItem>
      </div>

    </Menu>
  </div>
</template>

<script>
  export default {
    name: "Horizontalbar",
    methods:{
      Logoff(){
        console.log("点击了")
        this.$store.commit("Clear_Token_and_Uinfo");
        this.$router.replace("/login");
      }
    }
  }
</script>

<style scoped>
  .layout-navi{
    width: 420px;
    margin: 0 20px 0 auto;
    position: relative;
  }
  .navi-item1{
    left:195px;
  }
  .navi-item2{
    left:255px;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
</style>