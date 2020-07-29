<template>
<div class="box-card">
<Card class="card">
<div slot="title" class="login_header"  >
<span>星X克门店管理系统</span>
</div>
  <div>
    <Form :model="login_form">
      <FormItem prop="username">
        <Input prefix="ios-person" size="large" type="text" v-model="login_form.username" placeholder="请输入工号"/>
      </FormItem>
      <FormItem>
        <Input type="password"  prefix="ios-lock"  size="large" password v-model="login_form.password" placeholder="请输入密码"/>
      </FormItem>
     <FormItem>
          <Button size="large"  long @click="sendForm"  type="primary" >登陆</Button>
   </FormItem>
    </Form>
  </div>
</Card>
</div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return {
        login_form:{
          username:"",
          password:"",
        }
      }
    },
    methods:{
      sendForm(){
        console.log(this.login_form.username);
        console.log(this.login_form.password)
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