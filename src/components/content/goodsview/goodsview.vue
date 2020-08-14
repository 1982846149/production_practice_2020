<template>
  <Scroll height="650">
  <div class="goodsview">
  <goodcard v-for="(item,index) in goodsSources" :key="index" :imagesrc="item.gimg" :good-name="item.gname" :gooddescribe="item.gdes" :good-price="item.gprice"> </goodcard>
  
  </div></Scroll>
</template>

<script>
  import goodcard from "../goodcard/goodcard";
  export default {
    name: "goodsview",
    components:{
      goodcard,
    },
    props:{
      goodsSources:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.goodsview{
  display: flex;
  flex-wrap: wrap;
}

</style>