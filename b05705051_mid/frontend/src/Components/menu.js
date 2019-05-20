import React from 'react';
//import { BrowserRouter } from 'react-router-dom'
import { NavLink, Switch, Route } from 'react-router-dom'
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var toBlock1 = function(){
            //window.location.hash = "#block1";
            this.props.getCondition("block1");
		}
		var toBlock2 = function(){
            //window.location.hash = "#block2";
            this.props.getCondition("block2");
		}
		var toBlock3 = function(){
            //window.location.hash = "#block3";
            this.props.getCondition("block3");
		}
		var toBlock4 = function(){
            //window.location.hash = "#block4";
            this.props.getCondition("block4");
		}
        return (
            <div>
                <ul>
				    <li><a onMouseDown={toBlock1.bind(this)}><NavLink to="/block1">Intro</NavLink></a></li>
				    <li><a onMouseDown={toBlock2.bind(this)}><NavLink to="/block2">GOLottery</NavLink></a></li>
				    <li><a onMouseDown={toBlock3.bind(this)}><NavLink to="/block3">Register</NavLink></a></li>
				    <li><a onMouseDown={toBlock4.bind(this)}><NavLink to="/block4">Info</NavLink></a></li>
			    </ul>
            </div>
        )
    }
}
