/**
 * Created by pomy on 07/02/2017.
 */


'use sreict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let vendor = ['react','react-dom'];
let projectRoot = path.resolve(__dirname, '../');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: [
                    path.join(projectRoot, 'src')
                ],
                loaders: ['react-hot','babel']
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract('style','css')
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(ttf|eot|svg)$/,
                loader: "file-loader"
            }
        ]
    },
    resolve:{
        extensions:["",".js",".jsx"],
        fallback: [path.join(__dirname, '../node_modules')],
        alias:{
            '@src': path.resolve(__dirname, '../src'),
            '@components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    postcss: () => {
        return [
            require('precss'),
            require('autoprefixer')({ browsers: ['last 5 versions','Android >= 4.0', 'iOS >= 7'] })
        ];
    },
    plugins:[
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor",
            filename:"vendor.js"
        }),

        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
};