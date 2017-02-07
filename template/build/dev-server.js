/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');

let webpackDevConfig = require('./webpack.dev.config.js');
let config = require('../config/index');

let compiler = webpack(webpackDevConfig);
let server = new WebpackDevServer(compiler, webpackDevConfig.devServer);

server.listen(3000, 'localhost', (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(`open your browser and visit localhost:${config.dev.port} when bundle is valid.\n`);
});