var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: 'production', // dev 环境 vue 不支持 dll,暂时只支持pord
  entry: {
    vendor: [
      'vue/dist/vue.esm.js',
      'vue-router',
      'iview',
      'axios',
      'element-dataset',
      'es6-promise',
      'vuex',
    ]
  },
  output: {
    path: path.join(__dirname, '../dll'), // 打包后文件输出的位置
    filename: '[name].dll.[hash:20].js',// vendor.dll.js中暴露出的全局变量名。
    library: '[name]_[hash]' // 与webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../dll', '[name]-manifest.json'),
      name: '[name]_[hash]', 
      context: __dirname
    }),
  ]
};