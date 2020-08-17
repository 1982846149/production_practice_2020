<template>

    <div class="Order_layout">
      <Card padding="0" class="card1" >
        <p  padding="0" slot="title" class="cardhead">订单记录</p>
        <a @click="refresh" slot="extra" >
          <Icon size="large" type="md-refresh"></Icon>
          刷新
        </a>
        <show-order ref="showorder" :Axiosdata="Order_table_data"></show-order>
      </Card>
     
      <div class="layout">
        <Card  class="card2">
          <p slot="title">营业额各部分占比</p>
          <RingChart :Ring_data="Ring_data"></RingChart>
        </Card>
        <Card   class="card3">
          <p slot="title">订单时间段统计</p>
          <RoseChart :Rose_data="Rose_data"></RoseChart>
        </Card>

    </div>
      
    </div>
    
 
</template>

<script>
  import RingChart from "../../../components/content/ringchart/RingChart";
  import RoseChart from "../../../components/content/rosechart/RoseChart";
  import ShowOrder from "../../../components/content/showorder/ShowOrder";

  import {request_order_ring, request_order_rose, request_order_table} from "../../../network/order_data";

  export default {
    name: "Statistic",
    components:{
      ShowOrder,
      RingChart,
      RoseChart
    },
    data(){
      return {
        Rose_data:[],
        Ring_data:[],
        Order_table_data:[],
      }
    },
    methods:{
      do_ring_request(){
        request_order_ring().then( res =>{
          console.log("ring",res);
       //   console.log("Order",res.data);
          this.Ring_data = res.data;
        }).catch( error =>{
          console.log(error)
        })
      },
      do_rose_request(){
        request_order_rose().then( res =>{
          console.log("rose",res)
          this.Rose_data = res.data;
        }).catch( error =>{
          console.log(error);
        })
      },
      do_order_table_request(){
        request_order_table().then( res =>{
       //   console.log("order_table",res)
          console.log( "处理过的table",this.process_order_table(res.data));
          this.Order_table_data = this.process_order_table(res.data);
        }).catch( error =>{
          console.log(error);
        })
      },
      process_order_table(res){
        let processed_data = [];
        for ( let item of res){
          let obj = {};
          let string = item.date.slice(5,10) + " " +item.date.slice(11,16);
          obj["date"]=string;
          obj["orderid"]=item.id.toString();
          obj["customer"]=item.cname;
          obj["cost"] = item.gsum;
          let score = item.score /20;
          obj["score"]= Math.ceil(score);
          let describe = [];
          for (let it of item.describe){
            let des_obj = {};
            des_obj["num"] = it.num;
            let d_string = it.gname;
            if (d_string.match("（") !==null){
              let index=d_string.indexOf("（")+1;
              des_obj["kind"] = d_string.charAt(index)+"杯";
              des_obj["type"] = d_string.slice( 0,index-1);
            }
            else{
              des_obj["kind"] = "";
              des_obj["type"] = d_string;
            }
            describe.push(des_obj);
          }
          obj["describe"] = describe;
          processed_data.push(obj);
        }
        return processed_data;
      },
      refresh(){
        this.$refs.showorder.changepage(1);
        this.$refs.showorder.clear();
        this.do_order_table_request();
        this.do_rose_request();
        this.do_ring_request();
        console.log("刷新",this.Order_table_data)
      }
    },
    created() {
     this.do_ring_request();
     this.do_rose_request();
     this.do_order_table_request();
    }
  
  }
</script>

<style scoped>
.Order_layout{
  display: flex;
}
  .card1{
    width:60%;
    margin: 5px 5px 0px;
    height: 710px;
  }
  .layout{
    width:30%;
    display: block;
  }
  .card2{
    width:420px;
    margin: 5px 5px 0px;
    height:345px;
    
  }
  .card3{
    width:420px;
    margin: 5px 5px 0px;
    height:355px;
  }
  .cardhead{

  }
  .ivu-card-head{
    padding:0 0 0;
  }
</style>