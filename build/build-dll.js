const ora = require('ora')
const path = require("path")
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dll.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(__dirname, '../dll'), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('DLL 文件生成成功 \n'))
    console.log(chalk.yellow(
      '  Tip: DLL 文件能显著提高打包编译速度，同时有利于公共代码的缓存.\n'))
  })
})