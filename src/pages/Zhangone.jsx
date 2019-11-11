import React, { Component } from 'react';
import Zhang from './Zhang.jsx';
import Xiantiao from './Xiantiao.jsx';
import './Zhangone.css';


class Zhangone extends Component{
    constructor(){
        super();
    }
    render(){
        return(
        <div className="zhangone">
            <Xiantiao />
            <div className="xian">
            <Zhang />
            <Zhang />
            <Zhang />
            <Zhang />
            <Zhang />
            </div>
        </div>
        )
    }
}

export default Zhangone;