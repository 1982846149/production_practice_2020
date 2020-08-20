<template>
  <div v-if="Axiosdata.length!==0">
  <Input  class="input" v-model="s_input" search placeholder="搜索订单"  style="width:auto" enter-button @on-search="search"/>
  <div class="table">
    <Table   disabled-hover	 :columns="columns" :data="Orderdata">
      <template slot-scope="{row}" slot="orderid">
      {{row.orderid}}
      </template>
      <template slot-scope="{row}" slot="score">
        <Rate disabled allow-half v-model="row.score"> </Rate>
        
      </template>
      <template slot-scope="{index}" slot="action">
        <Button  type="info"  @click="showdetails(index)">详情</Button>
      </template>
      
    </Table>
    

  
    <Page  :current="current" class="page" :total="dataCount" :page-size="pageSize" show-total @on-change="changepage"></Page>
  
    <Modal  width="370" v-model="showModal" title="详情" @on-ok="ok" @on-cancer="ok">
     <p class="center_contain"><span class="modal-center">订单号：{{Orderdata[currentshowindex].orderid}}</span> <span class="modal-center">日期：{{Orderdata[currentshowindex].date}}</span></p>
      <p class="bigfont">客户：<span class="modal-customer">{{Orderdata[currentshowindex].customer}}</span></p>
     <br>
      <p class="details">订单记录：</p>
      
      <p class="detail_list" style="text-indent: 1em;" v-for="(item,index) in Orderdata[currentshowindex].describe" :key="index"> <span class="type">{{item.type}}</span>   <span class="kind">{{item.kind}}</span>    <span class="num">X{{item.num}}</span></p>
      <br>
      <p class="cost">￥{{Orderdata[currentshowindex].cost}}元</p>
      
    </Modal>
    
    <Modal footer-hide width="370" v-model="showSearch" title="搜索结果">
      <p v-if="decide_show_search"  class="center_contain"><span class="modal-center">订单号：{{SearchResult[SearchIndex].orderid}}</span> <span class="modal-center">日期： {{SearchResult[SearchIndex].date}}</span></p>
      <p  v-if="decide_show_search"  class="bigfont">客户：<span class="modal-customer">{{SearchResult[SearchIndex].customer}}</span></p>
      <p v-if="decide_show_search"  class="bigfont">评分：<Rate disabled v-model="SearchResult[SearchIndex].score"></Rate></p>
      <p class="details">订单记录：</p>
      <div v-if="decide_show_search" class="search_area">
      <p  class="detail_list" style="text-indent: 1em;" v-for="(item,index) in SearchResult[SearchIndex].describe" :key="index"> <span class="type">{{item.type}}</span>   <span class="kind">{{item.kind}}</span>    <span class="num">X{{item.num}}</span></p>
      </div>
        <p v-if="decide_show_search"  class="cost">￥{{SearchResult[SearchIndex].cost}}元</p>
      <br>
     <Button  class="btnleft" type="text" :disabled="SearchIndex===0" @click="last()">上一条</Button>
      <Button class="btnnext " type="text" :disabled="SearchIndex===SearchResult.length-1" @click="next()">下一条</Button>
    </Modal>
    
  </div>
  </div>
</template>


<script>
  export default {
    name: "ShowOrder",
    data(){
      return{
        decide_show_search: false,
        current:1,
        s_input:"",
        SearchResult:[
          {
            orderid: "20",
            date:"8/02 10:00",
            customer:"zq",
            cost: 65,
            score:3.5,
          },
        ],
        showSearch:false,
        SearchIndex:0,
        dataCount:0,
        pageSize:11,
        currentshowindex:0,
        showModal:false,
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
        

        Orderdata:[],
      }
    },
    created() {
      this.pushoriginorderdata()
      console.log(1)
    },
    
    props:{
      Axiosdata:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    
    watch:{
      Axiosdata(){
       // console.log("axios",newv,oldv)
        this.pushoriginorderdata();
      }
    },
    methods:{
      clear(){
        this.s_input="";
      },
    
      next(){
      //  console.log(this.SearchResult[this.SearchIndex])
      //  console.log("qian")
        this.SearchIndex = this.SearchIndex+1;
     //   console.log("hou");
  //      console.log(this.SearchIndex)
     //   console.log(this.SearchResult[this.SearchIndex])
  
  
      },
      last(){
    //    console.log(this.SearchResult[this.SearchIndex])
        this.SearchIndex = this.SearchIndex - 1;
      },
     
      pushoriginorderdata(){
      //  console.log("一个函数罢了")
         this.dataCount = this.Axiosdata.length;
     //    console.log(this.dataCount);
         if (this.dataCount <=this.pageSize){
           this.Orderdata=[];
           this.Orderdata.push(...this.Axiosdata);
         }
         else{
           this.Orderdata=[];
           this.Orderdata.push(...this.Axiosdata.slice(0, this.pageSize));
         }
      //   console.log(this.Orderdata)
      },
     
      search(res){
        console.log(  typeof(res) )
        this.SearchIndex = 0;
   //     this.decide_show_search = false;
     //   console.log(res);
        const result = [];
        let resindex;
         resindex = this.Axiosdata.findIndex( item =>{return item.orderid ===res});
        if (resindex!=-1)
        {
          result.push(resindex);
  //        console.log(result)
      //    return result;
        }
        else{
    //      console.log("不是orderid")
          let len = this.Axiosdata.length;
    //      console.log(len)
         let pos = 0;
    //      console.log(this.Axiosdata.slice(3))
       //  let array =[];
          while (pos<len) {
         //   array = this.axiosdata.slice(pos);
            console.log(1111)
            resindex = this.Axiosdata.slice(pos).findIndex(item => {
              return item.customer === res
            });
         //   console.log()
            if (resindex!==-1){
         //     console.log("resindex="+resindex)
              result.push(resindex+pos);
              pos = resindex+pos+1;
     //         console.log(pos);
            }
            else{
              break;
            }
          }
         
        }
       console.log("搜索失败"+result);
        this.SearchResult = [];
        for ( let item of result){
     //     console.log(item);
          this.SearchResult.push(this.Axiosdata[item]);
        }
        console.log(this.SearchResult)
        if (this.SearchResult.length ===0){
        //  this.showSearch =false;
          this.$Message['error']({background:true,
          content:"未查找到订单记录"
          })
         this.showSearch =false;
          this.decide_show_search = false;
        }
        else{
          console.log("失败+成功后",this.SearchResult.length)
          this.showSearch = true;
          this.decide_show_search = true;
        }
        
        console.log("decide",this.decide_show_search)
        console.log("show",this.showSearch)
      },
      
      ok(){
        this.showModal=false;
      },
      
      changepage(index){
        this.current=index;
        this.currentshowindex = 0;
        let _start = (index-1)*this.pageSize;
        let _end = (index)*this.pageSize;
        this.Orderdata = [];
        this.Orderdata.push(...this.Axiosdata.slice(_start,_end));
      //  console.log("搜索失败后",this.Orderdata)
      },
      
      showdetails(index){
    //    console.log(index);
    //    console.log(this.Orderdata[index].cost);
        this.currentshowindex = index;
        this.showModal = true;
      }
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
.modal-center{
  margin: 5px;
  font-size: 18px;
  flex: 1;
}
  .center_contain{
    display: flex;
  }
  .bigfont{
    font-size: 18px;
    margin: 5px;
  }
  .details{
    font-size: 18px;
    margin: 5px;
  }
  .detail_list{
    margin: 8px;
    font-size: 20px;
    
  }
  
  .modal-customer{
    font-size: 20px;
    
  }
  .search_area{
    height:170px;
  }
  .type{
   color: blue;
   
  }
  .num{
    position: absolute;
     right:30px;
  }
  .kind{
    position: absolute;
    left:180px
  }
  .cost{
    color: green;
    text-align: right;
    font-size: 20px;
    font-weight: bold;
  }
  .btnnext{
    position: relative;
    left:150px
    
  }
  .btnleft{
    position: relative;
    left:25px;
  }
</style>