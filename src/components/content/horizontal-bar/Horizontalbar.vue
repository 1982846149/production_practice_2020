<template>
  <div>
    <Menu mode="horizontal" theme="dark">
      <div class="layout-logo"></div>
      <div class="layout-navi">
        <MenuItem  name="userid" class="navi-item">
          <Icon>
          </Icon>
          账号（需要传数据）
        </MenuItem>
      </div>

    </Menu>
  </div>
</template>

<script>
  export default {
    name: "Horizontalbar"
  }
</script>

<style scoped>
  .layout-navi{
    width: 420px;
    margin: 0 20px 0 auto;
    position: relative;
  }
  .navi-item{
    left:195px;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
</style>