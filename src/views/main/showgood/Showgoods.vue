<template>
 
  <tabs v-if="decide_show">
    
    <TabPane  v-for="(value,key,index) in goodsalldata" :label="key" :key="index">
      <goodsview :goods-sources="value"></goodsview>
    </TabPane>
  
 

  </tabs>

</template>

<script>
 // import goodcard from "../../../components/content/goodcard/goodcard";
 import goodsview from "../../../components/content/goodsview/goodsview";
 import {request_goods_all_data} from "../../../network/goods_data";

 export default {
    name: "Showgoods",
    components:{
     // goodcard
      goodsview,
    },
    data(){
      return{
        goodsalldata: {},
        decide_show :false,
        
      }
    },
   methods:{
     process_goods_data(res){
       let obj = {};
       for (let item of res){
         let key = Object.keys(item)[0];
         obj[key] = item[key];
       }
       return obj;
       
     },
     do_goods_request(){
       request_goods_all_data().then( res =>{
         console.log("商品页面",res.data);
         console.log(this.process_goods_data(res.data));
         this.goodsalldata = this.process_goods_data(res.data);
         this.decide_show = true;
           }
       
       )
     }
   },
   created() {
     this.do_goods_request();
   }
 }
</script>

<style scoped>


</style>