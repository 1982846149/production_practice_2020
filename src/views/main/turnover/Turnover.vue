<template>
  <Scroll height="700">
  <div class="OrderView">
 
     <OPchart class="pie"></OPchart>

    <Linechart class="pie2"></Linechart>
    <Barchart class="line"></Barchart>
  
  
 

  </div>   </Scroll>
</template>

<script>
  import OPchart from "../../../components/content/orderpiechart/OPchart";
  import Linechart from "../../../components/content/linechart/Linechart";
  import Barchart from "../../../components/content/barchart/Barchart";
  import {request_turnover} from "../../../network/turnover_data";
  export default {
    name: "Order",
    components:{
      OPchart,
      Linechart,
      Barchart,
    },
    created() {
      request_turnover().then( res =>{
        console.log(res);
      }
      ).catch( error =>{
        console.log(error);
      })
    }
  
  }
</script>

<style scoped>
.pie{
  width:40%;
  margin: 5px 5px 5px;
}
.pie2{
  
  width:58%;
  margin: 5px 5px 5px;
}
.line{
  margin-top: 10px;
  margin-left:10px;
  width:97%;

}
  .OrderView{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position:relative;
    
    margin-left: 0px;
    padding-left: 0px;
    align-items:center;
  }
</style>
