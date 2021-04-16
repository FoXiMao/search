//require.context(‘使用的文件夹’，是否检索子目录，对文件格式有什么要求)
/**
 * 自动导入V1中的js组件
 * 
 */
const requireApi = require.context('./v1' , false,/\.js$/)
// console.log(requireApi.keys())
let module = {}
requireApi.keys().forEach(item => {
    // console.log(item)
    Object.assign(module,requireApi(item))
});
// console.log(module)
export default module