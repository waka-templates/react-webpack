/**
 * Created by pomy on 08/02/2017.
 */

'use strict';

import './index.css';

import React, {Component,PropTypes} from 'react';

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
                <img src='/assets/logo.png' alt="logo"/>
            </div>
        )
    }
}