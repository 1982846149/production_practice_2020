<template>
  <Scroll height="700">
  <div class="OrderView">
 
     <OPchart @refresh="dorefresh" :OPchart_data="OPchart_data" class="pie"></OPchart>

    <Linechart :Linechart_data="Linechart_data" class="pie2"></Linechart>
    <Barchart :Barchart_data="Barchart_data" class="line"></Barchart>
  
  
 

  </div>   </Scroll>
</template>

<script>
  import OPchart from "../../../components/content/orderpiechart/OPchart";
  import Linechart from "../../../components/content/linechart/Linechart";
  import Barchart from "../../../components/content/barchart/Barchart";
  import {request_turnover} from "../../../network/turnover_data";
  import{request_turnover_linerows,request_turnover_barrows} from "../../../network/turnover_data"

  export default {
    name: "Order",
    components:{
      OPchart,
      Linechart,
      Barchart,
    },
    data(){
      return {
        OPchart_data:{
          lastday:0,
          today:0,
          largest:0,
        },
        Linechart_data:[],
        Barchart_data:[],
      
      }
    },
    
    methods:{
      dorefresh(){
       this.do_op_request();
      this.do_line_request();
        this.do_bar_request();
      },
      do_op_request(){
        request_turnover().then( res =>{
         //     console.log(res.data[0]);
              this.OPchart_data.lastday = res.data[0].lastday;
              this.OPchart_data.today = res.data[0].today;
              this.OPchart_data.largest = res.data[0].largest;
            }
        ).catch( error =>{
          console.log(error);
        })
      },
      do_line_request(){
        request_turnover_linerows().then(res =>{
          this.Linechart_data = res.data;
         // console.log("linerows",res);
        }).catch( error =>{
          console.log(error);
        })
      },
      do_bar_request(){
        request_turnover_barrows().then( res=>{
         // console.log(res.data)
          this.Barchart_data = this.bar_data_process(res.data);
         // console.log(this.Barchart_data)
        }).catch( error =>{
          console.log(error)
        })
      },
      bar_data_process(res){
        let data=[];
        let dat = "";
        for( let item of res){
          let obj = {};
          dat = item.date.slice(5,7)+"."+item.date.slice(8);
          obj["日期"] = dat;
          obj["会员率"] = (item.会员率 *100).toFixed(2);
          obj["营业额"] = item.营业额;
          obj["好评率"] = item.好评率;
          data.push(obj);
        }
        return data;
      },
      
    },
 
    
    
    created() {
      this.do_op_request();
      this.do_line_request();
      this.do_bar_request();
      
    },
    destroyed() {
   //   console.log("页面销毁了")
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

