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
          rows: [
            { '日期': '7.21', '营业额': 1393, '会员率': 0.64, '好评率': 0.32 },
            { '日期': '7.22', '营业额': 3530, '会员率': 0.78, '好评率': 0.26 },
            { '日期': '7.23', '营业额': 2923, '会员率': 0.76, '好评率': 0.76 },
            { '日期': '7.24', '营业额': 1723, '会员率': 0.74, '好评率': 0.49 },
            { '日期': '7.25', '营业额': 3792, '会员率': 0.75, '好评率': 0.323 },
            { '日期': '7.26', '营业额': 4593, '会员率': 0.78, '好评率': 0.78 }
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>