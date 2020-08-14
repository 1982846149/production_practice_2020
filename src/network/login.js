import {request} from "./request";

export function dologin(formdata) {
  return request({
    method:"post",
    url:"login",
    data:formdata
    
  })
  
}