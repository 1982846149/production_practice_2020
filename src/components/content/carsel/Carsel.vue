<template>
    <div>
        <Carousel v-model="value" loop
                  :radius-dot="true"
                  :autoplay="true"
                  :autoplay-speed="2000"
                  :dots="set.dots">
            <CarouselItem>
                <div class="demo-carousel">
                    <img class="demo-img" src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/featured/2020summer3/SUM3-KV-BEV.jpg" />
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img class="demo-img" src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/featured/2020summer3/SUM3-food-bafei.jpg" />
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img class="demo-img" src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/featured/2020summer3/SUM3-food-buliou.jpg" />
                </div>
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>
    export default {
        name: "Carsel",
        data(){
            return  {
                value:0,
                set:{
                    dots:'inside'
                }
            }
        }
    }
</script>

<style scoped>
.demo-img{
    height: 400px;
    width: 1280px;
    margin: 0px 0px;
}
</style>