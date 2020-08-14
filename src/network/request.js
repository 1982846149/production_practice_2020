import axios from "axios"
export function request(config) {
  const instance = axios.create({
    baseURL:"http://localhost:8088/",
 //   timeout:"5000",
  })
  // instance.interceptors.request.use(config =>{
  //   config.headers.common['token']="123";
  //   return config;
  // })
  //
  
  instance.interceptors.request.use( config =>{
    if (localStorage.getItem("Authorization")){
      config.headers.Authorization= localStorage.getItem("Authorization");
    }
    return config;
  }, error => {
    console.log(error)
  })
  
  return instance(config);
  
}

