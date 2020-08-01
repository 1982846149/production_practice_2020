<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Horizontalbar></Horizontalbar>
      </Header>
      <Layout :style="{minHeight: '90vh'}">
        <Sider hide-trigger :style="{background: '#fff'}">
        <Navbar></Navbar>
        </Sider>
        <Layout :style="{padding: '0px 5px 0px', margin: '5px 0'}">
          
          <Content :style="{padding: '0px,0px,0px',margin: '0px', minHeight: '40vh'}">
            <router-view></router-view>
            
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import Horizontalbar from "../../components/content/horizontal-bar/Horizontalbar";
  import Navbar from "../../components/content/nav_bar/Navbar";
  

  export default {
    components: {
      Horizontalbar,
    Navbar,
    
    }
  }
</script>
