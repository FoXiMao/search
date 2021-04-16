import {isEmpty} from 'lodash'
import {Storage} from './Storage'
const TOKEN_STORAGE_NAME = 'token'
class User {
    static setToken(token, time =2) {
        // return Storage.set(LOGIN_STORAGE_NAME,status)
        const data = {
            value: token,
            expire: Date.now() +time * 24 * 60 * 60 *1000
        }
        return Storage.set(TOKEN_STORAGE_NAME,data)
    }
    static getToken() {
        const token = Storage.get(TOKEN_STORAGE_NAME) || {}
        if(isEmpty(token) || token.expire < Date.now){
            return ''
        }
       return token.value
    }
    static removeToken() {
        return Storage.remove(TOKEN_STORAGE_NAME)
    }
 
}
export {
    User
}