import React from 'react';
import bgImage2 from "../image/bg2.jpg";
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route, Redirect} from 'react-router-dom';
import axios from "axios";
export default class Block3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
			name: "",
			time: 0,
        }
    }
    componentDidMount() {
        this.getUserFromDb();
        if (!this.state.intervalIsSet) {
          let interval = setInterval(this.getDataFromDb, 1000);
          this.setState({ intervalIsSet: interval });
        }
      }
    
      // never let a process live forever 
      // always kill a process everytime we are done using it
      componentWillUnmount() {
        if (this.state.intervalIsSet) {
          clearInterval(this.state.intervalIsSet);
          this.setState({ intervalIsSet: null });
        }
      }
    getUserFromDb = async () => {
        await fetch("http://localhost:3001/api/getUser")
        .then(res => { return res.json() })
        .then(res => this.setState({ user: res.data }));

        console.log(this.state.user);
    };
    handleInput = e => {
        if (e.key === "Enter") {
            const word = e.target.value.trim();
            let permit = true;
            this.state.user.forEach(dat => {
                if (dat.user === word){
                    permit = false;
                }
            })
            if (word != "" && permit === true){
                e.target.value = "";   
                this.putDataToDB(word);
            }
            else{
                alert("name are used or invalid");
            }
        }
    }
    putDataToDB = (inputName) => {
        axios.post("http://localhost:3001/api/putUser", {
          user: inputName,
          time: 3,
        });
      };
    render() {
        var sectionStyle2 = {
			width: "100%",
			height: "300px",
			backgroundImage: `url(${bgImage2})` 
        };
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
        var fontInput = {
			color:'black',
			fontSize:40,
			fontWeight:'bold',
			textShadowColor:'#C0C0C0',
			textShadowRadius:2,
			textShadowOffset:{width:2,height:2},
			textAlign:'center',
			margin:50
        };
        return (
            <div>
                <div style={font} id="block2">
                    {/* prize
                    <div id = "container">
    		        <table>
      			        <caption> My Lottery </caption>
      			        <thead>
        			        <tr>{ this.props.columnIndex.map(e => (
        				        <th>{e}</th>
    				        ))}
    				        </tr>
  				        </thead>
  				        <tbody>
    					    {rec}
  					    </tbody>
    			    </table>
    		        </div> */}
                </div>
                <div style={fontInput}>
                    <input name="account" type="text" placeholder="please enter your name!! (press enter)" 
                        className="intro__input" onKeyPress={this.handleInput}/><br></br>
                </div>
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
