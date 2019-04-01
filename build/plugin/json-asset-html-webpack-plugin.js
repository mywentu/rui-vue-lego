/*
*  assetMap： 用作定制config.json 的结构，可以添加自定义的字段 非必填
*  assetMap： 用作定制config.json 的结构，可以添加自定义的字段 非必填
*  path: 静态文件输出路径 建议传值 config.build.assetsRoot 必填
*  sub:  静态文件版本号 建议传值 config.build.assetsSubDirectory 必填
*  在build中需要过滤是否为首屏加载的资源，利用htmlWebpackPlugin 可以完美避免这个问题
*/

function JsonAssetHtmlPlugin(options) {
  this.publicPath = ''
  this.sub = options.subDir ? options.subDir : ''
  this.path = options.path ? options.path : __dirname
  this.assetMap = options.tpl ? options.tpl : { javascript: [], css: []}
}

JsonAssetHtmlPlugin.prototype.apply = function(compiler){
  compiler.plugin("emit", (compilation, callback) => {
    const configBuffer = new Buffer(JSON.stringify(this.assetMap, 0, 4))
    const staticPathBuffer = new Buffer(JSON.stringify({
      staticPath: `http:${this.publicPath}${this.sub}/config.json`
    }))
    compilation.assets[`${this.sub}/config.json`] = {
      source: () => { return configBuffer },
      size: () => {
        return Buffer.byteLength(configBuffer, 'utf8');
      }
    }
    compilation.assets['staticPath.json'] = {
      source: () => { return staticPathBuffer },
      size: () => {
        return Buffer.byteLength(staticPathBuffer, 'utf8');
      }
    }
    callback()
  });
  compiler.hooks.compilation.tap('JsonAssetHtmlPlugin', (compilation) => {
    compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync('JsonAssetHtmlPlugin',(data, cb) => {
      let { publicPath } = data.assets
      let { js, css } = data.assets
      this.assetMap.javascript = js
      this.assetMap.css = css
      this.publicPath = publicPath
      cb(null, data)
    })
  })
}

module.exports = JsonAssetHtmlPlugin