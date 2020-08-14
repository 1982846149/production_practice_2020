import {request} from "./request";

export function request_turnover() {
  return request({
    method:"get",
    url:"order/turnover"
  })
  
}