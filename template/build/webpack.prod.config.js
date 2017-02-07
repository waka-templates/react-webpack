/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

let path = require('path');
let webpack = require('webpack');

let prodConfig = require('./webpack.base.config');
let config = require('../config');

prodConfig.plugins = (prodConfig.plugins || []).concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
        'process.env': config.build.env
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: false
        },
        sourceMap: true,
        mangle: true
    })
]);

module.exports = Object.assign({},prodConfig,{
    entry: {
        app:[path.resolve(__dirname, '../src/index.js')]
    },
    output: {
        filename: '[name].js',
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        sourceMapFilename: '[file].map'
    },
    devtool:'#source-map'
});