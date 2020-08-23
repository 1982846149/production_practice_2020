<template>
    <div>
        <tag color="primary" type="dot" size="large">说明：蓝色表示推荐订购，请确定数量后再选中提交！</tag>
        <br>
        <Table stripe ref="selection" :modal="goodsdata" :columns="columns4"  :data="data1" :row-class-name="rowClassName" height="400"
        @on-select="select" @on-select-cancel="cancel" class="table">
            <!--<template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="reduce(index)">-</Button>
                <Button type="error" size="small" @click="increase(index)">+</Button>
            </template>-->
        </Table>
        <br>
        <span class="sum">总价： {{sum}}元</span>
        <br>
        <Button class="Com" @click="postform">提交</Button>
        <br>
    </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import {post_ordergoods, request_ordergoods} from "../../../network/ordergoods_data";
    //let sum = 0;
    export default {
        name: "GoodsOrder",
        data: function () {
            return {
                sum:0,
                columns4: [
                    {
                        type: 'selection',
                        width: 70,
                        align: 'left'
                    },
                    {
                        title: '商品名',
                        key: 'name',
                        render: (h, params) => {
                            return h('Tooltip', {
                                props: {placement: 'top', transfer: true}
                            }, [params.row[params.column.key], h('span', {
                                slot: 'content', style: {whiteSpace: 'normal', wordBreak: 'break-all'}
                            }, '推荐数量20')
                            ])
                        }
                    },
                    {
                        title: '单价',
                        key: 'price'
                    },
                    {
                        title: '数量',
                        key: 'count',
                        render: (h, params) => {
                            return h('div', [
                                h('InputNumber', {
                                    props: {
                                        min: 1,
                                        value: params.row.count
                                    },
                                    on: {
                                        'on-change': e => {
                                            params.row.count = e
                                            this.data1[params.index] = params.row;
                                            this.data1[params.index].amount = this.data1[params.index].count * this.data1[params.index].price;
                                            this.selectData.for((v, index) => {
                                                if (v.bname === params.row.bname) {
                                                    this.selectData.splice(index, 1, params.row);
                                                }
                                            });
                                        }
                                    }
                                })
                            ])
                        }
                    },
                    {
                        title: '金额',
                        key: 'amount'
                    }
                ],
                data1: [],
                goodsarray:[],
                /*goodsdata:{
                    bname:"",
                    price:"",
                    count:"",
                    amount:""
                },*/
                //goodsdata:{}
            }
        },
        props:{
            ordergoods_data:{
                type:Array,
                default(){
                    return[];
                }
            }
        },
        created() {
            //console.log(this.goodsarray);
            this.sum = 0;
            request_ordergoods().then(res =>{
                    console.log(res);
                    this.data1 = this.data_process(res.data);
                    //this.ordergoods_data = res.data;
                }
            ).catch(error=>{
                console.log(error);
            })
        },
        watch:{
            ordergoods_data(newVal,oldVal){
                this.data1 = this.ordergoods;
                //this.data1 = this.ordergoods_data;
                console.log("ordergood_watch",newVal,oldVal);
            }
        },
        methods: {
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
            },
            postform(){
                if (this.sum === 0){
                    this.$Modal.error({
                        title:'提交',
                        content:'您未选中任何商品！'
                    })
                    return;
                }
                for (let i = 0;i<this.goodsarray.length;i++){
                    this.goodsdata = this.goodsarray[i];
                    post_ordergoods(this.goodsdata).then(res =>{
                        //console.log(row.bname);
                        //this.goodsdata[0].aid=row.aid;
                        console.log(res);
                        console.log(res.data);
                        let code=res.data;
                        if(code === 1){
                            this.$Modal.success({
                                title:'提交',
                                content:'提交成功！'
                            })
                            return;
                        }
                        else if(code === -1){
                            this.$Modal.error({
                                title:'提交',
                                content:'提交失败，请稍后重试!'
                            })
                            return;
                        }
                    }).catch(err =>{
                        console.log(err);
                    })
                }
            },
            /*handleSummary: function ({columns, data},selection) {
                const sums = {};
                columns.forEach((column, index) => {
                    const key = column.key;
                    if (index === 1) {
                        sums[key] = {
                            key,
                            value: '总价：'
                        };
                        return;
                    }
                    console.log(selection);
                    //const values = selection.amount;
                    const values = data.map(item => Number(item[key]));
                    if(index === 4){
                        const v = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[key] = {
                            key,
                            value: v + ' 元'
                        };
                    }
                    else {
                        sums[key] = {
                            key,
                            value: ''
                        };
                    }
                });
                return sums;
            },*/
            rowClassName: function (row, index) {
                if (index === 0) {
                    return 'ivu-table-stripe-even';
                }
                else return ' ';
            },
            /*reduce: function (index) {
                if(this.data1[index].count > 1){
                    this.data1[index].count--;
                    this.data1[index].amount -= this.data1[index].price;
                }
                else {
                    this.$Message.error('数量不能小于1！')
                }
                //连接部分
            },
            increase:function (index) {
                if(this.data1[index].count < 99){
                    this.data1[index].count++;
                    this.data1[index].amount += this.data1[index].price;
                }
                else {
                    this.$message.error('数量不能大于99！')
                }
                //连接部分
            }*/
            // eslint-disable-next-line no-unused-vars
            select(selection,row){
                console.log(row.amount);
                let goodsdata={};
                goodsdata.bname=row.name;
                goodsdata.price=row.price;
                goodsdata.count=row.count;
                goodsdata.amount=row.amount;
                /*this.goodsdata.bname=row.name;
                this.goodsdata.price=row.price;
                this.goodsdata.count=row.count;
                this.goodsdata.amount=row.amount;*/
                this.goodsarray.push(goodsdata);
                /*for (let i = 0;i<this.goodsarray.length;i++)
                {
                    console.log(i,this.goodsarray[i]);
                }*/
                console.log(this.goodsarray);
                console.log('data',goodsdata);
                this.sum += row.amount;
                //console.log(this.sum);
            },
            cancel(selection,row){
                console.log(row.bname);
                let arrindex = 0;
                for (let i = 0;i<this.goodsarray.length;i++)
                {
                    if (this.goodsarray[i].bname === row.bname)
                    {
                        arrindex = i;
                    }
                }
                console.log(arrindex);
                this.goodsarray.splice(arrindex,1);
                console.log(this.goodsarray);
                this.sum -= row.amount;
                //console.log(this.sum);
            },
        }
    }
</script>

<style>
.ivu-table-stripe-even td{
    background-color: #2db7f5;
}
table th.ivu-table-column-left div.ivu-table-cell{
    display: none;
}
.sum{
    position: absolute;
    margin-left: 10px;
    margin-bottom: 20px;
    font-size: large;
}
    .Com {
        position: absolute;
        margin-left: 10px;
        margin-bottom: 0px;
        bottom:3px;
    }
</style>