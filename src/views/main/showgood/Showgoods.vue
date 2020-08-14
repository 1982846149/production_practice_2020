<template>
  <tabs>
    <TabPane label="饮品">
    <goodsview :goods-sources="goodsalldata.drink"></goodsview>
    </TabPane>

    <TabPane label="食品">
    
    </TabPane>
  </tabs>

</template>

<script>
 // import goodcard from "../../../components/content/goodcard/goodcard";
 import goodsview from "../../../components/content/goodsview/goodsview";
  export default {
    name: "Showgoods",
    components:{
     // goodcard
      goodsview,
    },
    data(){
      return{
        goodsalldata:{
          drink:[
            {
              gname:"美式咖啡",
              gdes:"这是美式咖啡的描述这是美式咖啡的描述这是美式咖啡的描述这是美式咖啡的描述这是美式咖啡的描述这是美式咖啡的描述",
              gprice:"31/34/37",
              gimg:"coffeetemplate"
            },
            {
              gname:"美式咖啡2",
              gdes:"这是美式咖啡2的描述这是美式咖啡2的描述这是美式咖啡2的描述这是美式咖啡2的描述这是美式咖啡2的描述这是美式咖啡的描述",
              gprice:"32/35/38",
              gimg:"coffeetemplate"
            },
            {
              gname:"美式咖啡3",
              gdes:"这是美式咖啡3的描述这是美式咖啡3的描述这是美式咖啡3的描述这是美式咖啡的描述这是美式咖啡的描述这是美式咖啡的描述",
              gprice:"33/36/39",
              gimg:"coffeetemplate"
            },
            {
              gname:"美式咖啡4",
              gdes:"这是美式咖啡4的描述这是美式咖啡4的描述这是美式咖啡4的描述这是美式咖啡的描述这是美式咖啡的描述这是美式咖啡的描述",
              gprice:"34/37/40",
              gimg:"coffeetemplate"
            },
            {
              gname:"美式咖啡5",
              gdes:"这是美式咖啡5的描述这是美式咖啡5的描述这是美式咖啡5的描述这是美式咖啡的描述这是美式咖啡的描述这是美式咖啡的描述",
              gprice:"33/36/39",
              gimg:"coffeetemplate"
            },
          ],
          
        }
      }
    }
  }
</script>

<style scoped>

</style>