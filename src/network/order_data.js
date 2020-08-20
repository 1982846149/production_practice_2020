import {request} from "./request"

export function request_order_ring() {
  return request({
    method:"get",
    url:"client/ringrows"
  })
  
}

export function request_order_rose() {
  return request({
    method:"get",
    url:"client/roserows"
  })
  
}

export function request_order_table(){
  return request({
    method:"get",
    url:"client/axios",
  })
}