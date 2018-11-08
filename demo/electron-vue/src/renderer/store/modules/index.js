/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */
// 遍历当前目录下所有除了index.js之外的js文件，保存在modules中
const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
// 返回的所有vuex状态管理对象
// console.log(modules);

export default modules
