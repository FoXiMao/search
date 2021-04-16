import {http} from '../Http'
class Img {
    static getToken(data) {
        return http.post('/token',data)
    }
    // static uploadImg(data,token){
    //     const Token = token
    // }
    static uploadImg(token,avatarFile) {
        const data = new FormData()
        data.append('image',avatarFile)
        return http.post('/api/user/avatar',data,{
            headers:{
                token,
                'Content-type': 'multipart/form-data'
            }
        })
    }
}
export {
    Img
}