import {Storage} from './Storage'
const CART_STORAGE_NAME = 'cart'
const QUICK_BUY_NAME = 'quick_buy'
class Cart {
    static add(data) {
        const cartList = Storage.get(CART_STORAGE_NAME) || []
        // console.log(cartList,data)
        cartList.unshift(data)
        Storage.set(CART_STORAGE_NAME,cartList)
    }
    static update(where,data) {//[id:10]
        if(!where){
            return
        }
        const cartList = Storage.get(CART_STORAGE_NAME) || []
        const key = Object.keys(where)[0]
        const index = cartList.findIndex(item => item[key] === where[key])
        if(index > -1){
            cartList.splice(index ,1 ,data)
            Storage.set(CART_STORAGE_NAME,cartList)
        }
    }
    static set(data) {
        Storage.set(CART_STORAGE_NAME,data)
    }
    static get(goodsId = null) {
        const cartList = Storage.get(CART_STORAGE_NAME) || []
           //不用全等过滤 uunderfed
        if(goodsId == null){
            return cartList
        }
        const index = cartList.findIndex(item => item.id === goodsId)
         if(index >-1){
             return cartList[index]
         }else{
             return []
         }
    }
    static remove(name,value) {
        const cartList = Storage.get(CART_STORAGE_NAME) || []
        const index = cartList.findIndex(item => item[name] === value)
        if(index > -1){
            cartList.splice(index,1)
            Storage.set(CART_STORAGE_NAME,cartList)
        }
    }
    static clear() {
        Storage.remove(CART_STORAGE_NAME)
    }

    //立即购买
    static setQuick (data) {
        Storage.set(QUICK_BUY_NAME,data)
    }
    static getQuick () {
      return  Storage.get(QUICK_BUY_NAME) || {}
    }
    static removeQuick () {
        Storage.remove(QUICK_BUY_NAME)
      }
}
export {
    Cart
}