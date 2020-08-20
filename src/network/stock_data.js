import {request} from "./request";

export function request_stock() {
    return request({
        method:"get",
        url:"stock/getstock"

    })

}