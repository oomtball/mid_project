import React from 'react';
import Draw from '../Components/draw.js'
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Switch, Route, Redirect} from 'react-router-dom'
export default class MoviePage1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            intervalIsSet: false,
            idToUpdate: null,
            objectToUpdate: null,
        };
    }
    componentDidMount() {
        this.getDataFromDb();
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
    getDataFromDb = async () => {
        await fetch("http://localhost:3001/api/getData")
        .then(res => { return res.json() })
        .then(res => this.setState({ data: res.data }));

        console.log(this.state.data);
    };
    render() {
        let used_list=[];
        this.state.data.forEach(dat => {
            if (dat.item_id === "movie_1") {
                used_list[0] = dat.used;
            }
            else if (dat.item_id === "movie_2") {
                used_list[1] = dat.used;
            }
            else if (dat.item_id === "movie_3") {
                used_list[2] = dat.used;
            }
            else if (dat.item_id === "movie_4") {
                used_list[3] = dat.used;
            }
            else if (dat.item_id === "movie_5") {
                used_list[4] = dat.used;
            }
            else if (dat.item_id === "movie_6") {
                used_list[5] = dat.used;
            }
            else if (dat.item_id === "movie_7") {
                used_list[6] = dat.used;
            }
            else if (dat.item_id === "movie_8") {
                used_list[7] = dat.used;
            }
            else if (dat.item_id === "movie_9") {
                used_list[8] = dat.used;
            }
            else if (dat.item_id === "movie_10") {
                used_list[9] = dat.used;
            }
            else if (dat.item_id === "movie_11") {
                used_list[10] = dat.used;
            }
            else if (dat.item_id === "movie_12") {
                used_list[11] = dat.used;
            }
            else if (dat.item_id === "movie_13") {
                used_list[12] = dat.used;
            }
            else if (dat.item_id === "movie_14") {
                used_list[13] = dat.used;
            }
            else if (dat.item_id === "movie_15") {
                used_list[14] = dat.used;
            }
            else if (dat.item_id === "movie_16") {
                used_list[15] = dat.used;
            }
        });
        var style1 = {
            background: 'black',
            display: "inline-block",

        };
        return (
            <div text-align="center">
                <br></br>
                <ul style={style1}>
                    <li><Draw drawID="movie_1" used={used_list[0]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_2" used={used_list[1]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_3" used={used_list[2]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_4" used={used_list[3]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                </ul>
                <ul style={style1}>
                    <li><Draw drawID="movie_5" used={used_list[4]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_6" used={used_list[5]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_7" used={used_list[6]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_8" used={used_list[7]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                </ul>
                <ul style={style1}>
                    <li><Draw drawID="movie_9" used={used_list[8]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_10" used={used_list[9]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_11" used={used_list[10]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_12" used={used_list[11]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                </ul>
                <ul style={style1}>
                    <li><Draw drawID="movie_13" used={used_list[12]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_14" used={used_list[13]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_15" used={used_list[14]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                    <li><Draw drawID="movie_16" used={used_list[15]} userNow={this.props.userNow} timeNow={this.props.timeNow}/></li>
                </ul>
            </div>
        )
    }
}
