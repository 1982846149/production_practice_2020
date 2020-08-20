<template>
    <Table stripe :modal="goodsdata" :columns="col1" :data="data0" height="600"></Table>
</template>

<script>
    import {his_ordergoods} from "../../../network/ordergoods_data";

    export default {
        name: "GoodsData",
        data(){
            return {
                col1:[
                    {
                        title:'商品名',
                        key:'bname'
                    },
                    {
                        title: '单价',
                        key: 'price'
                    },
                    {
                        title: '数量',
                        key: 'count'
                    },
                    {
                        title: '金额',
                        key: 'amount'
                    },
                    {
                        title: '日期',
                        key: 'booktime'
                    }
                ],
                data0:[],
                goodsdata:[]
            }

        },
        /*props:{
            goods_data: {
                type:Array,
                default(){
                    return[];
                }
            }
        },*/
        created(){
            his_ordergoods().then(res =>{
                console.log(res);
                this.data0=res.data;
            }).catch(error=>{
                console.log(error);
            })
        },
        watch:{
            goodsdata_re(newVal,oldVal){
                this.data0=this.goodsdata;
                console.log("good_watch",newVal,oldVal);
            }
        }
    }
</script>

<style scoped>

</style>