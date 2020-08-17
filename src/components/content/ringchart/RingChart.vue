<template>
<ve-ring  :grid="grid" :legend="legend" :data="chartData" :settings="chartSettings"></ve-ring>
</template>

<script>
  import VeRing from "v-charts/lib/ring"
  export default {
    name: "RingChart",
    components: {
      VeRing,
    },
    data() {
      return {
        
        chartSettings:{
         
          radius: [70, 90],
          offsetY:160,
     
        },
        legend:{
          selectedMode:false,
          
        },
        grid:{
          bottom:0,
          top:0
        },
        chartData:{
          columns: ['种类', '订单数'],
          rows: [
            // { '种类': '食品', '订单数': 29 },
            // { '种类': '饮品', '订单数': 139 },
            // { '种类': '咖啡杯', '订单数': 14 },
            // { '种类': '会员', '订单数': 30 },
            // { '种类': '其它', '订单数': 35 }
          ]
        }
      
      }
    },
    props:{
      Ring_data:{
        type: Array,
        default(){
          return [];
        }
      }
    },
    watch:{
      Ring_data() {
  //     console.log(newVal,oldVal);
       this.chartData.rows = this.Ring_data;
      }
    }
  }
</script>

<style scoped>

</style>