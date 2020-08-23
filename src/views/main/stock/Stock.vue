<template>
    <div>
        <card class="card2">
            <Carsel></Carsel>
        </card>
        <card padding="0" class="card1">
            <p  padding="0" slot="title" class="cardhead">库存统计</p>
            <ShowStock :axiosdata="stock_data"></ShowStock>
        </card>
    </div>

</template>

<script>
    import ShowStock from "../../../components/content/showstock/ShowStock";
    import Carsel from "../../../components/content/carsel/Carsel";
    import {request_stock} from "../../../network/stock_data";
    export default {
        name: "Stock",
        components:{
            ShowStock,
            // eslint-disable-next-line vue/no-unused-components
            Carsel
        },
        data(){
            return {
                stock_data:[],
            }
        },
        created() {
            request_stock().then(res =>{
                    console.log(res);
                    this.stock_data = res.data;
                }
            ).catch(error=>{
                console.log(error);
            })
        }
    }

</script>

<style scoped>
    .card2{
        height: 430px;
    }
    .card1{
        margin: 5px 5px 0px;
        height: 600px;
    }
</style>