<template>
<div class="box-card">
<Card class="card">
<div slot="title" class="login_header"  >
<span>星X克门店管理系统</span>
</div>
  <div>
    <Form ref="form" :model="login_form" :rules="login_rules">
      <FormItem prop="id">
        <Input prefix="ios-person" size="large" type="text" v-model="login_form.id" placeholder="请输入工号"/>
      </FormItem>
      <FormItem prop="password">
        <Input type="password"  prefix="ios-lock"  size="large" password v-model="login_form.password" placeholder="请输入密码"/>
      </FormItem>
     <FormItem>
          <Button size="large"  long  @click="sendForm"  type="primary" >登陆</Button>
   </FormItem>
    </Form>
  </div>
</Card>
</div>
</template>

<script>
  import {dologin} from "../../../network/login"
  export default {
    name: "login",
    data(){
      return {
        login_form:{
          id:"",
          password:"",
        },
        login_rules:{
          id:[
            {required:true,message:"工号不能为空",trigger:"blur"},],
          password:[
              {
            required:true,message:"密码不能为空",trigger:"blur"},]
        }
      }
    },
    methods:{
      sendForm(){
        dologin(this.login_form).then(res => {
          console.log(res);
          console.log(res.data)
          let code = res.data.code;
          if(code===200) {
            this.$Message.success("成功登陆");
            this.$store.commit("Set_token",res.headers.authorization);
            this.$store.commit("Set_Uinfo",res.data.data.username);
            console.log(this.$store.state.token);
            this.$router.replace("/main");
          }
          else{
            this.$Message.error("用户名或密码错误");
          }
        }).catch( err =>{
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
.box-card{
  justify-content: left;
  display: flex;
  
}
  .card{
    width: 380px;
    background-color: rgba(200,200,200,0.3);
  }
  .login_header{
    font-size: 25px;
    color:white;
    text-align: center;
  }

</style>