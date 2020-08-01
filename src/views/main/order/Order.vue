<template>

    <div class="Order_layout">
      <Card padding="0" class="card1" >
        <p  padding="0" slot="title" class="cardhead">订单记录</p>
        <a href="#" slot="extra" >
          <Icon size="large" type="md-refresh"></Icon>
          刷新
        </a>
        <show-order></show-order>
      </Card>
     
      <div class="layout">
        <Card  class="card2">
          <p slot="title">营业额各部分占比</p>
          <RingChart></RingChart>
        </Card>
        <Card   class="card3">
          <p slot="title">订单时间段统计</p>
          <RoseChart></RoseChart>
        </Card>

    </div>
      
    </div>
    
 
</template>

<script>
  import RingChart from "../../../components/content/ringchart/RingChart";
  import RoseChart from "../../../components/content/rosechart/RoseChart";
  import ShowOrder from "../../../components/content/showorder/ShowOrder";
  export default {
    name: "Statistic",
    components:{
      ShowOrder,
      RingChart,
      RoseChart
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