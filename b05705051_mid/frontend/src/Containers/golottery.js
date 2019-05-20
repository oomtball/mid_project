import React from 'react';
import bgImage2 from "../image/bg2.jpg";
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Switch, Route, Redirect} from 'react-router-dom'
import Button from '../Components/item_button';
export default class Block2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var font = {
			color:'white',
			fontSize:40,
			fontWeight:'bold',
			textShadowColor:'#C0C0C0',
			textShadowRadius:2,
			textShadowOffset:{width:2,height:2},
			textAlign:'center',
			margin:50
        };
        var fontHome = {
			color:'white',
			fontSize:20,
			fontWeight:'bold',
			textShadowColor:'#C0C0C0',
			textShadowRadius:2,
			textShadowOffset:{width:2,height:2},
			margin:50
        };
        return (
            <div style={font}>
                Choose one you want to win!!<br></br><br></br>
                <NavLink to="/lexusPage"><Button buttonName="Lexus" buttonClass="button button-khaki"></Button></NavLink>
                <NavLink to="/ps4Page"><Button buttonName="PS4" buttonClass="button button-blue"></Button></NavLink>
                <NavLink to="/tvPage"><Button buttonName="Television" buttonClass="button button-green"></Button></NavLink>
                <NavLink to="/moviePage"><Button buttonName="Movie" buttonClass="button button-brown"></Button></NavLink>
                <div style={fontHome}>
                <NavLink to="/home">
                    Home
                </NavLink>
                </div>
                <Switch>
                    <Redirect from="/Home" to="/" />
                </Switch>
            </div>
        )
    }
}
