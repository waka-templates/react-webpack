/**
 * Created by pomy on 08/02/2017.
 */

'use strict';

import React, {Component, PropTypes} from 'react';

export  default  class Info extends Component{
    constructor (){
        super();
    }

    static propTypes = {
        info: PropTypes.string
    };

    static defaultProps = {
        info: 'project info:'
    };

    render(){
        return (
            <div className="info">
                <h2>{this.props.info}</h2>
                <h3>Project Name:{{name}}</h3>
                <h3>Project Version:{{version}}</h3>
                <h3>Author:{{author}}</h3>
                <h3>Desc: {{description}}</h3>
            </div>
        )
    }
}