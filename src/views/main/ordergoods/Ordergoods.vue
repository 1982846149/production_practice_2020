<template>
    <div class="goods_layout">
        <Card padding="0" class="card1" >
            <p  padding="0" slot="title" class="cardhead1">订货系统</p>
            <GoodsOrder :ordergoods_data="ordergoods_data"></GoodsOrder>
            <!--GoodsOrder></GoodsOrder-->
        </Card>
        <div class="layout">
            <Card padding="0" class="card2">
                <p slot="title" class="cardhead1">历史记录</p>
                <GoodsData :goodsdata="goods_data"></GoodsData>
                <!--GoodsData></GoodsData-->
            </Card>
        </div>
    </div>
</template>

<script>
    import GoodsOrder from "../../../components/content/goodsorder/GoodsOrder";
    import GoodsData from "../../../components/content/goodsdata/GoodsData";
    // eslint-disable-next-line no-unused-vars
    import {request_ordergoods,his_ordergoods} from "../../../network/ordergoods_data";
    export default {
        name: "Ordergoods",
        components:{
            GoodsOrder,
            GoodsData
        },
        /*data(){
            return{
                ordergoods_data:[],
                goods_data:[]
            }
        },
        methods:{
            data_process(res){
                let data=[];
                for( let item of res){
                    let obj = {};
                    obj["name"] = item.name;
                    obj["price"] = item.price;
                    obj["count"] = 1;
                    obj["amount"] = item.price * obj["count"];
                    data.push(obj);
                }
                return data;
            }
        },
        created() {
            request_ordergoods().then(res =>{
                console.log(res);
                this.ordergoods_data = this.data_process(res.data);
            }
            ).catch(error=>{
                console.log(error);
            });
            his_ordergoods().then(res =>{
                console.log(res);
                this.goods_data=res.data;
            }).catch(error=>{
                console.log(error);
            })
        }*/
    }
</script>

<style scoped>
    .goods_layout{
        display: flex;
    }
    .layout{
        width: 40%;
    }
    .card1{
        width: 60%;
        margin: 0px 5px 0px;
        height: 650px;
    }
    .card2{
        margin-top: 0px;
        height: 650px;
    }
</style>