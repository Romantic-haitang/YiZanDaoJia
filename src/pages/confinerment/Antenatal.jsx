import React, { Component } from 'react';
import Navbar from "../Navbar.jsx"
import Personalinfo from "./Personalinfo.jsx"
import Emphasis from "./Emphasis.jsx"
class Antenatal extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Navbar title="产检时间表" notShow={true} />
                <Personalinfo />
                <Emphasis />
            </div>

        )
    }
}
export default Antenatal