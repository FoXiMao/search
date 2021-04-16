import {http} from '../Http'
class User {
    static register(data) {
        return http.post('/shose/user/register',data)
    }
    static login(data) {
        return http.post('/shose/user/login',data)
    }
    static getInfo(token) {
        return http.get('/api/user',{},{
            token
        })
    }
    static updateAvatar(token,avatarFile) {
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
    User
}