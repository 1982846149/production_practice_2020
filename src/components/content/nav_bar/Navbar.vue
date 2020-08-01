
<template>
  <div>
  <Menu  width="auto" class="navbar" theme="light" active-name="1">
    <MenuGroup title="门店营业业务管理">
      <MenuItem name="1" to="turnover" replace>营业额统计</MenuItem>
      <MenuItem name="2" to="order" replace> 订单统计</MenuItem>
      <MenuItem name="3"> 商品管理</MenuItem>
    </MenuGroup>
    <MenuGroup title="门店库存业务管理">
      <MenuItem name="4">库存统计</MenuItem>
      <MenuItem name="5">订货系统</MenuItem>
    </MenuGroup>
  </Menu>

  </div>
</template>
<script>
  export default {
  
  }
</script>
<script>
  export default {
    data () {
      return {
      
      }
    }
  }
</script>


<style scoped>


</style>