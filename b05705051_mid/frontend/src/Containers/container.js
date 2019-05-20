import React from 'react';
import bgImage from "../image/bg.jpg";
import Block1 from '../Containers/intro';
import Block2 from '../Containers/golottery';
import Block3 from '../Containers/register';
import Block4 from '../Containers/info';
import LexusPage1 from '../Containers/lexusPage1';
import Ps4Page1 from '../Containers/ps4Page1';
import TvPage1 from '../Containers/tvPage1';
import MoviePage1 from '../Containers/moviePage1';
import Menu from "../Components/menu.js"
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Switch, Route } from 'react-router-dom'

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			condition: "",
			user: [],
			name: "",
			time: 0,
			intervalIsSet: false,
        }
        this.getCondition = this.getCondition.bind(this);
    }
	returnName = (x) => {
		this.setState({name: x})
	}
	returnTime = (y) => {
		this.setState({time: y})
	}

    getCondition = (x) => {
        this.setState({condition: x});
    }
	componentDidMount() {
        this.getUserFromDb();
        if (!this.state.intervalIsSet) {
          let interval = setInterval(this.getUserFromDb, 1000);
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
		let tempTime2 = 0;
		this.state.user.forEach(dat => {
			if (dat.user === this.state.name){
				tempTime2 = dat.time;
			}
		})
		this.setState({time: tempTime2});
    };
    handleInput = e => {
        if (e.key === "Enter") {
            const word = e.target.value.trim();
            let permit = false;
            let tempTime = 0;
            this.state.user.forEach(dat => {
                if (dat.user === word){
                    permit = true;
                    tempTime = dat.time;
                }
            })
            if (word != "" && permit === true){
                e.target.value = "";   
                this.setState({name: word, time: tempTime}); 
            }
            else{
                alert("name are not registered or invalid");
            }
        }
    }
    render() {
		let rec = this.props.prizeTable.prize.map(e => 
			<tr>{e.map(
			  g => <td>{g}</td>
			)}</tr>
		  );
		var sectionStyle = {
			width: "100%",
			height: "100%",
			backgroundImage: `url(${bgImage})` 
		};
	  
		// var sectionStyle2 = {
		// 	width: "100%",
		// 	height: "300px",
		// 	backgroundImage: `url(${bgImage2})` 
		// };

		var font = {
			color:'white',
			fontSize:20,
			fontWeight:'bold',
			textShadowColor:'#C0C0C0',
			textShadowRadius:2,
			textShadowOffset:{width:2,height:2},
			textAlign:'center',
			margin:20
        };
		var font2 = {
			color:'white',
			fontSize:40,
			fontWeight:'bold',
			textShadowColor:'#C0C0C0',
			textShadowRadius:2,
			textShadowOffset:{width:2,height:2},
			textAlign:'center',
			margin:20
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
		const MyLexusPage = (props) => {
			return (
			  <LexusPage1
				userNow = {this.state.name}
				timeNow = {this.state.time}
				{...props}
			  />
			);
		}
		const MyPs4Page = (props) => {
			return (
			  <Ps4Page1
				userNow = {this.state.name}
				timeNow = {this.state.time}
				{...props}
			  />
			);
		}
		const MyTvPage = (props) => {
			return (
			  <TvPage1
				userNow = {this.state.name}
				timeNow = {this.state.time}
				{...props}
			  />
			);
		}
		const MyMoviePage = (props) => {
			return (
			  <MoviePage1
				userNow = {this.state.name}
				timeNow = {this.state.time}
				{...props}
			  />
			);
		}

        // var showBlock;
        // if (this.state.condition != ""){
        //     showBlock = <div style = {sectionStyle2}></div>
        // }

        return (
            <BrowserRouter>
            <body>
    	    <div style = {sectionStyle} id = "container">
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
				<div style={fontInput}>
					<div style={font2}>log In<br></br></div>
                    <input name="account" type="text" placeholder="please enter your name!! (press enter)" 
                        className="intro__input" onKeyPress={this.handleInput}/><br></br>
                </div>
    		</div>
			<div id="menu">
                <Menu getCondition={this.getCondition.bind(this)} />
			</div>
			<div style={font}>name:{this.state.name}  time:{this.state.time}</div>
			<Switch>
                <Route path="/block1" component={Block1} />
                <Route path="/block2" component={Block2} />
                <Route path="/block3" component={Block3} />
                <Route path="/block4" component={Block4} />
                <Route path="/lexusPage"  render={MyLexusPage}/>
                <Route path="/ps4Page" render={MyPs4Page} />
                <Route path="/tvPage" render={MyTvPage} />
                <Route path="/moviePage" render={MyMoviePage} />
            </Switch>
            {/* <div style={font} id={this.state.condition}>
                {this.state.condition}
                {showBlock}
            </div> */}
    		</body>
            </BrowserRouter>
        )
    }
}