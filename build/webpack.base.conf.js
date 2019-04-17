'use strict'
const os = require('os')
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const {
  VueLoaderPlugin
} = require('vue-loader')
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const vueLoaderConfig = require('./vue-loader.conf')
// const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const threadLoader = require('thread-loader')

const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length
})

threadLoader.warmup({}, [
  'babel-loader',
  'sass-loader',
  'css-loader',
  'postcss-loader',
  'vue-style-loader'
])

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      include: [
        resolve('src'),
        resolve('docs'),
        resolve('packages')
      ],
      exclude: /node_modules/,
      loader: 'happypack/loader?id=ts'
    },
    {
      test: /\.vue$/,
      use: [{
        loader: 'thread-loader',
        options: {
          workers: happyThreadPool.size
        }
      },
      {
        loader: 'vue-loader',
        options: vueLoaderConfig
      }
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'thread-loader',
        options: {
          workers: happyThreadPool.size
        }
      }],
      include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.md$/,
      use: [{
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        loader: 'vue-markdown-loader/lib/markdown-compiler',
        options: {
          raw: true,
          preprocess: function (MarkdownIt, Source) {
            MarkdownIt.renderer.rules.table_open = function () {
              return '<div class="table-container"><table class="table">'
            }
            MarkdownIt.renderer.rules.table_close = function () {
              return '</table></div>'
            }
            return Source
          }
        }
      }
      ]
    }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'ts',
      threads: happyThreadPool.size,
      loaders: [
        'babel-loader',
        {
          path: 'ts-loader',
          query: {
            transpileOnly: true,
            happyPackMode: true,
            appendTsxSuffixTo: [/\.vue$/]
          }
        }
      ]
    }),
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
