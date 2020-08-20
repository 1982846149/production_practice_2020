import {request} from "./request";

export function request_ordergoods() {
    return request({
        method:"get",
        url:"stock/getbooks"
    })
}
export function post_ordergoods(goodsdata) {
    return request({
        method:"post",
        url:"stock/updatebook",
        data:goodsdata
    })
}
export function his_ordergoods() {
    return request({
        method:"get",
        url:"stock/getbook"
    })
}