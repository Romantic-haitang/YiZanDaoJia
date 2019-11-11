import React, { Component } from 'react';
import "./Personalinfo.css"
class Personalinfo extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div className="bigbox">
			<div className="top">
				<div>吴雅如</div>
				<div>
					<p>重置时间</p>
				</div>
			</div>
			<div className="circle">
				<p>距离出生还有</p>
				<p style={{marginTop: "20px"}}><span style={{fontSize: "80px",color: "rgb(0, 204, 153)"}}>251</span>天</p>
				<p style={{marginTop: "90px"}}>今天是：怀孕4周+1天</p>
			</div>
			<p className="bottom">着订一般在受精后6-7天开始，11-12天内完成</p>
		</div>
		<div className="advertis">孕期应当至少检查5次，如有异常情况需听从医生建议</div>
            </div>

        )
    }
}
export default Personalinfo