/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './app';

window.onload = function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
};