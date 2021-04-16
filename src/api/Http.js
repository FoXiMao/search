import axios from 'axios'
class Http{
     constructor () {
        axios.defaults.baseURL = 'https://img.foximao.cn/api';
        // axios.defaults.headers.common['appkey'] = 'f68bSYqte0m6EibwhARrzTcYDPoV0FobCi06uDfM3eF4QGQQKSywmd71ytM';
        this.axios = axios
     }
     get (url,params,headers) {
         return new Promise((resolve,reject) => {
            this.axios.get(url,{
                params,
                headers
            })
            .then(res =>{ 
                res = res.data
                if(parseInt(res.error_code) === 0){
                    resolve(res.data)
                }else{
                    reject(res.error_msg)
                }
            })
            .catch(err =>{
                reject(err)
            })
         })
      
     }
     post (url,data,options) { 
        return new Promise((resolve,reject) => {
            this.axios.post(url,data,options)
            .then(res =>{ 
                res = res.data
                if(parseInt(res.error_code) === 0){
                    resolve(res.data)
                }else{
                    reject(res.error_msg)
                }
            })
            .catch(err =>{
                reject(err)
            })
         })
     }
}
const http = new Http()
export  {
    http
}