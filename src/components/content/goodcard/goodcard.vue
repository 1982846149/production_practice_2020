<template>
  <Card class="card" padding="0">
    <h2 style="font-family: '楷体',serif;" slot="title">{{goodName}}</h2>
    <img class="image" height="210" width="230" :src="'http://'+Imagesrc" />
   <div class="textarea">
     <h3>商品描述:</h3>
    <p class="pp" style="text-indent: 1em;">{{gooddescribe}}</p>
   <br>
     <h3>售价:</h3>
     <p class="price">{{goodPrice}}</p>
   </div>
  </Card>
  
</template>

<script>
  
  export default {
    name: "good",
    data(){
      return {

  
      }
    },
    props:{
      goodName:{
        type:String,
        default(){
          return "暂无商品"
        }
      },
      Imagesrc:{
       type:String,
       default(){
         return "coffeetemplate"
       }
       
      },
      
      
      gooddescribe: {
        type: String,
        default() {
          return "暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述暂无描述"
        },
      },
        goodPrice:{
          type:String,
          default(){
            return "￥33/36/39"
          }
        }
      }
      
    
  }
</script>

<style scoped>
 .title{
   font-family: '楷体',serif;
 }
  .card{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left:30px;
    margin-right:0px;
  }
  .textarea{
    position: relative;
    margin-top:5px;
    margin-left: 5px;
    margin-bottom: 5px;
    margin-right: 5px;
    width: auto;
    height: auto;
  }
  .pp{
    width:220px;
    word-wrap:break-word;
    word-break: break-all;
    height:75px;
    margin-top:5px;
  }
  
  .textarea h3{
    margin-left: 5px  ;
  }

  .price{
    text-align: right;
    font-size: 20px;
    margin-right: 15px;
  }
</style>