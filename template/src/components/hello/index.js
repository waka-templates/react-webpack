/**
 * Created by pomy on 08/02/2017.
 */

'use strict';

import './index.css';

import React, {Component,PropTypes} from 'react';
import { Link} from 'react-router';

export  default  class Hello extends Component{
    constructor (){
        super();
    }

    static propTypes = {
        desc: PropTypes.string
    };

    static defaultProps = {
        desc: 'A simple template webpack + react setup for projects'
    };

    render(){
        return (
            <div className="desc">
                <p>{this.props.desc}</p>
                <img src="../../assets/logo.png" alt="logo"/>
                <Link to="/info">查看项目信息</Link>
            </div>
        )
    }
}