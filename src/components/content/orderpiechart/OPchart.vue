<template>
  <div>
    <Card class="pie">
      <p slot="title">营业额情况</p>
      <a @click="refresh" slot="extra" >
        <Icon size="large" type="md-refresh"></Icon>
        刷新
      </a>
      <div class="chartsthing">
      <Row>
        <i-col span="11">
          <i-circle :size="200" :stroke-color="show_color" :percent="percentage">
            <p style="font-size: 19px">较昨日同期营业额</p>
            <br>
            <span class="demo-Circle-inner" :style="show_style">{{message}}{{percentage}}%</span>
          </i-circle>
        </i-col>
        <i-col span="11" offset="2">
          <div  class="center">
            <List size="large" class="list-item">
              <ListItem><span >今日营业额:{{today}}元</span></ListItem>
              <ListItem>昨日营业额: {{lastday}}元</ListItem>
              <ListItem>今日单笔最高:{{largest}}元</ListItem>
            </List>
         </div>
          
    
         
        </i-col>
      </Row>
  </div>
    </Card>
    
  </div>
</template>
<script>
  export default {
    name: "OPchart",
    data(){
      return {
  
      }
    },
    watch:{
      OPchart_data:function(newValue){
       this.OPchart_data = newValue;
      
      },
  
    
    },
  
   
    methods: {
      refresh() {
      //  console.log("刷新营业额");
      //  console.log(this.OPchart_data);
        
        this.$emit("refresh");
      },
    },
      props:{
        OPchart_data:{
          type: Object,
          default(){
            return {};
          }
        }
      },
    
    computed:{
      lastday(){
        return this.OPchart_data.lastday;
      },
      today(){
        return this.OPchart_data.today;
      },
      largest(){
        return this.OPchart_data.largest;
      },
      message(){
    //    return this.today>=this.lastday?"增长":"减少"
        return this.today>=this.lastday?"增长":"减少"
      },
      percentage(){
       return this.today>=this.lastday?((this.today/this.lastday - 1)*100).toFixed(2): (((1-((this.today)/this.lastday))*100).toFixed(2))
      // return 22.0;
      },
      show_color(){
        return this.today>=this.lastday?"#5cb85c":"#ff5500"
      },
      show_style(){
        return "font-size:24px;color:"+this.show_color
      }
    }
  }
</script>

<style scoped>
.center{
  position: relative;
  top:0px;
}
  .list-item{
    font-size: 18px;
  }
  .pie {
    height: 375px;   /*用来控制整个环状图所在卡片的高度大小*/
  }
  .chartsthing {
    margin-top: 30px;
  }

</style>