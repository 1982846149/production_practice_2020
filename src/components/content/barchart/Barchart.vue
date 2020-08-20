<template>
  <Card>
  <p slot="title">近七日营业额统计</p>
  <ve-histogram height="450px" judge-width="true"	:data="chartData" :settings="chartSettings"></ve-histogram>
  
  </Card>
</template>

<script>
  import VeHistogram from "v-charts/lib/histogram"
  export default {
    name: "Barchart",
    components:{
      VeHistogram,
    },
    data(){
      return{
        
       
        chartSettings :{
          axisSite: { right: ['会员率',"好评率"] },
          yAxisType: ['KMB', 'percent'],
          yAxisName: ['数值', '比率']
        },
        chartData: {
          columns: ['日期', '营业额',"会员率","好评率"],
          rows:[],
        }
      }
    },
    props:{
      Barchart_data:{
        type:Array,
        default(){
          return [];
        }
      },
    },
    watch:{
      Barchart_data(newval,oldval){
         console.log("bar_watch",newval,oldval);
          this.chartData.rows = this.Barchart_data;
      //    console.log("子组件data"+this.chartData.rows);
        console.log(this.chartData.rows);
        }
        
      },
  //    mounted(){
  //    this.chartData.rows=this.Barchart_data;
  //      console.log("mounted",this.chartData.rows);

   //   }
    
  }
</script>

<style scoped>

</style>