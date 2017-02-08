/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
{{#router}}
import { Router, Route, browserHistory} from 'react-router';
import Info from './components/info';
{{/router}}
import App from './app';

{{#if router}}
window.onload = function () {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/info" component={Info}/>
        </Router>,
        document.getElementById('app')
    )
};
{{else}}
window.onload = function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
};
{{/if}}

