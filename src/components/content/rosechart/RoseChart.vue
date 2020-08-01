<template>
  <ve-ring    :grid="grid" :legend-visible="false" height="270px" :data="chartData" :settings="chartSettings">
  
  </ve-ring>
</template>

<script>
  import VeRing from "v-charts/lib/ring"
  export default {
    
    name: "RoseChart",
    components:{
      VeRing,
      
    },
    data() {
      return {
        chartSettings: {
          offsetY: 140,
          roseType: 'radius'
  
        },
      
        grid: {
          bottom: 0,
          top: 0,
          left:0,
          right:0,
        },
        chartData: {
          columns: ['时间段', '订单数'],
          rows: [
            {'时间段': '7:00-9:00', '订单数': 29},
            {'时间段': '9:00-11:00', '订单数': 40},
            {'时间段': '11:00-13:00', '订单数': 24},
            {'时间段': '13:00-15:00', '订单数': 30},
            {'时间段': '15:00-17:00', '订单数': 56},
            {'时间段': '19:00-21:00', '订单数': 32},
            {'时间段': '21:00-23:00', '订单数': 14},

          ]
        }
      }
    }
    
  }
</script>

<style scoped>

</style>