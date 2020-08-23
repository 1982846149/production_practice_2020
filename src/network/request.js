import axios from "axios"

export function request(config) {
  const instance = axios.create({
    //baseURL:"http://115.29.177.136:8088",
    //baseURL:"http://localhost:8088/",
    baseURL:"/api"
 //   timeout:"5000",
  })
  // instance.interceptors.request.use(config =>{
  //   config.headers.common['token']="123";
  //   return config;
  // })
  //
  
  instance.interceptors.request.use( config =>{
    if (localStorage.getItem("Authorization")){
      config.headers.AD= localStorage.getItem("Authorization");
    }
    return config;
  }, error => {
    console.log(error)
  })
  
  return instance(config);
  
}
