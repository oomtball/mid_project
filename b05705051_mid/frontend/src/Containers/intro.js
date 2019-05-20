import React from 'react';
import bgImage2 from "../image/bg2.jpg";
import money from "../image/fadachai.png";
import { NavLink, Switch, Route, Redirect} from 'react-router-dom';
export default class Block1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
			name: "",
			time: 0,
        }
    }
    // componentDidMount() {
    //     this.getUserFromDb();
    //     if (!this.state.intervalIsSet) {
    //       let interval = setInterval(this.getDataFromDb, 1000);
    //       this.setState({ intervalIsSet: interval });
    //     }
    //   }
    
    //   // never let a process live forever 
    //   // always kill a process everytime we are done using it
    //   componentWillUnmount() {
    //     if (this.state.intervalIsSet) {
    //       clearInterval(this.state.intervalIsSet);
    //       this.setState({ intervalIsSet: null });
    //     }
    //   }
    // getUserFromDb = async () => {
    //     await fetch("http://localhost:3001/api/getUser")
    //     .then(res => { return res.json() })
    //     .then(res => this.setState({ user: res.data }));

    //     console.log(this.state.user);
    // };
    // handleInput = e => {
    //     if (e.key === "Enter") {
    //         const word = e.target.value.trim();
    //         let permit = false;
    //         let tempTime = 0;
    //         this.state.user.forEach(dat => {
    //             if (dat.user === word){
    //                 permit = true;
    //                 tempTime = dat.time;
    //             }
    //         })
    //         if (word != "" && permit === true){
    //             e.target.value = "";   
    //             this.setState({name: word, time: tempTime});   
    //         }
    //         else{
    //             alert("name are not registered or invalid");
    //         }
    //     }
    // }
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
        var moneyBG = {
            width: "55%",
			height: "250px",
            backgroundImage: `url(${money})`,
            margin: "0px auto",
        }
        // var fontInput = {
		// 	color:'black',
		// 	fontSize:40,
		// 	fontWeight:'bold',
		// 	textShadowColor:'#C0C0C0',
		// 	textShadowRadius:2,
		// 	textShadowOffset:{width:2,height:2},
		// 	textAlign:'center',
		// 	margin:50
        // };
        return (
            <div>
                {/* <div style={font}>name:{this.state.name}  time:{this.state.time}</div> */}
                <div style={font} id="block1">
                    Introduction<br></br>
                    This is a small web<br></br>
                    Where you can play pumping<br></br>
                    Press GOLottery to win your prize!!!
                    <div style={moneyBG}></div>
                    {/* please enter your name!! <br></br> */}
                    {/* <div style={fontInput}>
                        <input name="account" type="text" placeholder="please enter your name!! (press enter)" 
                            className="intro__input" onKeyPress={this.handleInput}/><br></br>
                    </div> */}
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
