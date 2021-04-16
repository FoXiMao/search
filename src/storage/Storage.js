const APP_STORAGE_NAME = 'shengxian_app'
import {isObject} from 'lodash'
class Storage {

    static set (name,value) {
        const data = JSON.parse(localStorage.getItem(APP_STORAGE_NAME))|| {} 
        data[name] = value
        localStorage.setItem(APP_STORAGE_NAME , JSON.stringify(data))
    }
    static insert(name,value) {
        const data = JSON.parse(localStorage.getItem(APP_STORAGE_NAME))|| {} 
        if(Reflect.has(data,name)){
            let res = data[name]
            if(isObject(res) ){
                if(Array.isArray(res)){
                    res.push(...value)
                }else{
                    res = Object.assign(res,value)
                }
                localStorage.setItem(APP_STORAGE_NAME , JSON.stringify(data))
            }else{
                Storage.set(name,value) 
            }
        }else{
            Storage.set(name,value)
        }
    }
    static get (name) {
        const data = JSON.parse(localStorage.getItem(APP_STORAGE_NAME))|| {} 
        return data[name]
    }
    static remove (name) {
        const data = JSON.parse(localStorage.getItem(APP_STORAGE_NAME))|| {} 
        if(Reflect.deleteProperty(data,name)){
            localStorage.setItem(APP_STORAGE_NAME , JSON.stringify(data))
        }
    }
    static clear () {
        localStorage.removeItem('APP_STORAGE_NAME')
    }
}

export{
    Storage
}