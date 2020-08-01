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
    data() {
        return {
          extend:{
            'xAxis.0.axisLabel.fontSize': 16,
            'yAxis.0.axisLabel.fontSize':16
          },
          chartData: {
            columns: ['type', 'today', 'lastday'],
            rows: [
              {'type': '饮品', 'today': 70, 'lastday': 67},
              {'type': '食品', 'today': 15, 'lastday': 16},
              {'type': '咖啡豆', 'today': 5, 'lastday': 8},
              {'type': '咖啡杯', 'today': 6, 'lastday': 9},
              {'type': '其它', 'today': 17, 'lastday': 14},
            ]
          }
        }
      }
    
  }
</script>

<style scoped>
  .linechart{
    padding:0px 0px 0px
  }

</style>