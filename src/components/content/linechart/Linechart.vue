<template>
  <Card padding="3" class="linechart">
    <p slot="title">
      今昨两日销售量统计对比
    </p>
  
    <ve-line  height="350px" judge-width="true" :extend="extend" :data="chartData" ></ve-line>
  </Card>
</template>

<script>
  import VeLine from 'v-charts/lib/line'
  export default {
    name: "LineChart",
    components:{
      VeLine,
    },
    data(){
        return {
          extend:{
            'xAxis.0.axisLabel.fontSize': 16,
            'yAxis.0.axisLabel.fontSize':16
          },
          chartData: {
            columns: ['type', '今日', '昨日'],
            rows: []
          },
          
        }
      },
    props:{
      Linechart_data:{
        type:Array,
        default(){
          return [];
        }
      }
    
    },
    watch:{
      Linechart_data(newVal,oldVal){
        this.chartData.rows = this.Linechart_data;
        console.log("line_watch",newVal,oldVal);
      }
    }
    
    
    
  }
</script>

<style scoped>
  .linechart{
    padding:0px 0px 0px
  }

</style>