/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

let path = require('path');
let webpack = require('webpack');

let devConfig = require('./webpack.base.config');
let config = require('../config');
let projectRoot = path.resolve(__dirname, '../');

devConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    include: [
        path.join(projectRoot, 'src')
    ],
    loader: 'react-hot!babel'
},{
    test:/\.css$/,
    loader: 'style!css!postcss'
});

devConfig.plugins = (devConfig.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': config.dev.env
    }),
    new webpack.NoErrorsPlugin()
]);

module.exports = Object.assign({},devConfig,{
    entry: {
        app:[
            "webpack-hot-middleware/client?noInfo=true&reload=true",
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
