/**
 * Created by pomy on 08/02/2017.
 */

'use strict';

import React, {Component,PropTypes} from 'react';

export  default  class Info extends Component{
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
            <div className="info">
                <h2>111</h2>
                <h3>Project Name:222</h3>
                <h3>Project Version:3333</h3>
                <h3>Author:44444</h3>
                <h3>Desc: 55555</h3>
            </div>
        )
    }
}