import {Storage} from './Storage'
const ADDRESS_STORAGE_NAME = 'address'
class Address {
    static set(data) {
        Storage.set(ADDRESS_STORAGE_NAME,data)
    }
    static get() {
      return   Storage.get(ADDRESS_STORAGE_NAME) || {}
   
    }
    static clear() {
        Storage.remove(ADDRESS_STORAGE_NAME)
    }
}
export {
    Address
}