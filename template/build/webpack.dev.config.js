/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

let path = require('path');
let webpack = require('webpack');

let devConfig = require('./webpack.base.config');
let config = require('../config');

devConfig.plugins = (devConfig.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': config.dev.env
    }),
    new webpack.NoErrorsPlugin()
]);

// see https://webpack.github.io/docs/webpack-dev-server.html
devConfig.devServer = {
    hot: true,
    noInfo: false,
    quite: false,
    port: config.dev.port,
    debug:true,
    inline: true,
    progress: true,
    historyApiFallback: true,
    colors: true,
    stats: 'normal',
    contentBase: config.dev.assetsPublicPath,
    publicPath: config.dev.assetsPublicPath
};

module.exports = Object.assign({},devConfig,{
    entry: {
        app:[
            "webpack/hot/dev-server",
            `webpack-dev-server/client?http://localhost:${config.dev.port}/`,
            path.resolve(__dirname, '../src/index.js')
        ]
    },
    output: {
        filename: '[name].js',
        path: config.dev.assetsRoot,
        publicPath: config.dev.assetsPublicPath,
        sourceMapFilename: '[file].map'
    },
    devtool:'#cheap-module-eval-source-map'
});
