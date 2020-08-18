import {request} from "./request";

export function request_goods_all_data() {
  return request({
    method:"get",
    url:"goods/goodsell"
  
  })
  
}