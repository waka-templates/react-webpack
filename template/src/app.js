/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

import './app.css';

import React, {Component} from 'react';
import { Link} from 'react-router';

import Hello from '@components/hello';

export default class App extends Component{
    constructor (){
        super();
    }

    render(){
        return (
            <div>
                <h3>react webpack</h3>
                <Hello />
                <Link to="/info">查看项目信息</Link>
            </div>
        )
    }
}

