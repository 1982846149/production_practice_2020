import {request} from "./request";

export function request_turnover() {
  return request({
    method:"get",
    url:"order/turnover"
  })
  
}
export function request_turnover_linerows(){
  return request({
    method:"get",
    url:"order/linerows"
  })
  
}

export function request_turnover_barrows(){
  return request({
    method:"get",
    url:"order/barrows"
  })
}