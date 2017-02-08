/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory} from 'react-router';

import App from './app';
import Info from './components/info';

// window.onload = function () {
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// };

window.onload = function () {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/info" component={Info}/>
        </Router>,
        document.getElementById('app')
    )
};