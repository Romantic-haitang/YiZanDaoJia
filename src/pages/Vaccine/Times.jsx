import React, { Component } from 'react';
import "./Times.css"
class Times extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="selcets">
			<select className="selcet">
				<option value="">选择时间</option>
				<option value="">刚出生</option>
				<option value="">1个月</option>
				<option value="">2个月</option>
				<option value="">3个月</option>
				<option value="">4个月</option>
				<option value="">5个月</option>
				<option value="">6个月</option>
				<option value="">7个月</option>
				<option value="">8个月</option>
				<option value="">9个月</option>
				<option value="">10个月</option>
				<option value="">2岁</option>
				<option value="">4岁</option>
				<option value="">6岁</option>
				<option value="">8岁</option>
			</select>
		</div>
           
        )
    }
}

export default Times