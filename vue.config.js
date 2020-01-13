// const webpack = require('webpack')
// const path = require('path')

// module.exports = {
//     baseUrl: '.',
//     publicPath: '/dist/'
// }

const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    publicPath: '',
    //productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,

    devServer: {
        port: 9999
    },

    configureWebpack: {
        output: {
            sourcePrefix: ' '
        },
        amd: {
            toUrlUndefined: true
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve('src')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            }),
        ],
        module: {
            unknownContextCritical: /^.\/.*$/,
            unknownContextCritical: false
        }
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "src/css/index.less")]
        }
    }
}
