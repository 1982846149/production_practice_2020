<template>
    <div class="table">
        <Table stripe :columns="columns1" :data="stockdata" height="480"></Table>
        <Page class="page" :total="dataCount" :page-size="pageSize" :current="1" show-total @on-change="changePage"></Page>
    </div>
</template>

<script>
    export default {
        name: "ShowStock",
        data: function () {
            return {
                dataCount: 0,
                pageSize: 4,
                columns1: [
                    {
                        title: '图片',
                        key: 'stockpicture',
                        // eslint-disable-next-line no-unused-vars
                        render:(h,params)=>{
                            return h('img',{
                                style:{
                                    width:'150px',
                                    height:'120px',
                                    'border-radius':'5%'
                                },
                                attrs:{
                                    //src: 'http://localhost:8088/img/1.jpg'
                                    //src: require('../../../assets/img/menu/coffee.jpg'),
                                    src:params.row.stockpicture,
                                }
                            })
                        }
                    },
                    /*{
                        title: '图片',
                        key: 'stockpicture',
                        src:''
                    },*/
                    {
                      title: '商品号',
                      key:'id'
                    },
                    {
                        title: '商品',
                        key: 'kname',
                    },
                    {
                        title: '库存量',
                        key: 'snum',

                    },
                    {
                        title: '入库时间',
                        key: 'stime',

                    },
                ],
                stockdata: [],
            }
        },
        props:{
            axiosdata:{
                type:Array,
                default(){
                    return[]
                }
            }
        },
        watch:{
            axiosdata(){
                /*this.stockdata=this.stock_data;
                console.log("stock_watch",newVal,oldVal);*/
                this.pushoriginorderdata();
            }
        },
        created() {
            this.pushoriginorderdata();
        },
        methods:{
            pushoriginorderdata(){
                this.dataCount = this.axiosdata.length;
                console.log(this.dataCount);
                if (this.dataCount <= this.pageSize){
                    this.stockdata.push(...this.axiosdata);
                }
                else{
                    this.stockdata.push(...this.axiosdata.slice(0, this.pageSize));
                }
                console.log(this.stockdata)
            },
            changePage(index){
                const _start = (index-1)*this.pageSize;
                const _end = (index)*this.pageSize;
                this.stockdata = this.axiosdata.slice(_start,_end);
            },

        }
    }
</script>

<style scoped>
.table{
    margin: 15px 0px 5px;
}
.page{
    position: absolute;
    margin-left: 10px;
    margin-bottom: 0px;
    bottom:3px;

    left:20px
}

</style>