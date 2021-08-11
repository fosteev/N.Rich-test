const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new ErrorOverlayPlugin()
    ]
})