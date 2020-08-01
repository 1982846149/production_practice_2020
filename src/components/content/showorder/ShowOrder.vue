<template>
  <div>
  <Input  class="input" search placeholder="搜索订单" style="width:auto" enter-button @on-search="search"/>
  <div class="table">
    <Table   disabled-hover	 :columns="columns" :data="Orderdata">
      <template slot-scope="{row}" slot="orderid">
      {{row.orderid}}
      </template>
      <template slot-scope="{row}" slot="score">
        <Rate disabled allow-half v-model="row.score"> </Rate>
        
      </template>
      <template slot="action">
        <Button  type="info" >详情</Button>
      </template>
      
    </Table>
  
    <Page  class="page" :total="dataCount" :page-size="pageSize" show-total @on-change="changepage"></Page>

  </div>
  </div>
</template>

<script>
  export default {
    name: "ShowOrder",
    data(){
      return{
        dataCount:0,
        pageSize:11,
        columns:[
          {
            title:"订单号",
            key:"orderid",
            slot:"orderid",
            width:80,
          },
          {
            title:"订单日期",
            width:120,
            key:"date"
          },
          {
            title:"客户",
            key:"customer",
            width: 100
          },
          {
            title:"消费金额",
            key:"cost",
            width:100,
            align:"center"
          },
          {
            title:"评价",
            slot:"score",
            width:180,
            align:"center"
          },
          {
            title:"查看",
            slot:"action",
            
            align:"center",
            
          }
         
        ],
        
        axiosdata:[
          {
            orderid: "13",
            date:"8-02 10:00",
            customer:"kgb51111",
            cost: 65,
            score:3.5,
          },
          {
            orderid: "13",
            date:"8-02 10:00",
            customer:"kgb51111",
            cost: 65,
            score:3.5,
          },
          {
            orderid: "13",
            date:"8-02 10:00",
            customer:"kgb51111",
            cost: 65,
            score:3.5,
          },
          {
            orderid: "13",
            date:"8-02 10:00",
            customer:"kgb51111",
            cost: 65,
            score:3.5,
          },
  
  
          {
            orderid: "13",
            date:"8-02 10:00",
            customer:"kgb51111",
            cost: 65,
            score:3.5,
          },{
          orderid: "13",
          date:"8-02 10:00",
          customer:"kgb51111",
          cost: 65,
          score:3.5,
        },
          {
            orderid: "13",
            date:"8-02 10:00",
            customer:"kgb51111",
            cost: 65,
            score:3.5,
          },{
          orderid: "13",
          date:"8-02 10:00",
          customer:"kgb51111",
          cost: 65,
          score:3.5,
        },
          {
            orderid: "12",
            date:"8-02 09:00",
            customer:"kgb51111",
            cost: 75,
            score:3.5,
          },
          {
            orderid: "11",
            date:"8-01 09:00",
            customer:"kgb51111",
            cost: 75,
            score:3.5,
          },
          {
            orderid: "13",
            date:"8-02 10:00",
            customer:"kgb51111",
            cost: 65,
            score:3.5,
          },{
            orderid: "13",
            date:"8-02 10:00",
            customer:"kgb51111",
            cost: 65,
            score:3.5,
          },
          {
            orderid: "12",
            date:"8-02 09:00",
            customer:"kgb51111",
            cost: 75,
            score:3.5,
          },
          {
            orderid: "11",
            date:"8-01 09:00",
            customer:"kgb51111",
            cost: 75,
            score:3.5,
          },],
        
        Orderdata:[],
      }
    },
    created() {
      this.pushoriginorderdata()
    },
    methods:{
     
      pushoriginorderdata(){
        console.log("一个函数罢了")
         this.dataCount = this.axiosdata.length;
         console.log(this.dataCount);
         if (this.dataCount <=this.pageSize){
           this.Orderdata.push(...this.axiosdata);
         }
         else{
           this.Orderdata.push(...this.axiosdata.slice(0, this.pageSize));
         }
         console.log(this.Orderdata)
      }, search(res){
        console.log(res)
     
    
      },
      
      
      
      changepage(index){
        let _start = (index-1)*this.pageSize;
        let _end = (index)*this.pageSize;
        this.Orderdata = this.axiosdata.slice(_start,_end);
      },
    },
  }
</script>

<style scoped>
  .table{
    margin: 15px 0px 5px;
  }
  .input{
    margin-top:5px;
    margin-left: 10px;
  }
  .page{
    position: absolute;
    margin-left: 10px;
    margin-bottom: 0px;
    bottom:3px;

    left:20px
  }
.btn{
  position: absolute;
  bottom:3px;
  right: 60px;
}

</style>