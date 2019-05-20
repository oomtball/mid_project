import React from 'react';
import bgImage2 from "../image/bg2.jpg";
import money from "../image/fadachai.png";
import white from "../image/white.jpg"
import lexus from "../image/lexus.jpg";
import ps4 from "../image/ps4.jpg";
import tv from "../image/tv.jpg";
import ticket from "../image/ticket.jpg";
import axios from "axios";
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Switch, Route, Redirect} from 'react-router-dom'
export default class Draw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            user: [],
            intervalIsSet: false,
            objectToUpdate: null,
        };
    }
    updateDB = (idToUpdate, updateToApply) => {
        axios.post("http://localhost:3001/api/updateData", {
          item_id: idToUpdate,
          update: { used: updateToApply }
        });
      };
    updateUser = (idToUpdate, updateToApply) => {
        axios.post("http://localhost:3001/api/updateUser", {
          user: idToUpdate,
          update: { time: updateToApply }
        });
      };
    render() {
        var money1;
        if (this.props.used === true){
            if (this.props.drawID === "lexus_5"){
                money1 = lexus;
            }
            else if (this.props.drawID === "ps4_10" || this.props.drawID === "ps4_13"){
                money1 = ps4;
            }
            else if (this.props.drawID === "tv_11" || this.props.drawID === "tv_1"){
                money1 = tv;
            }
            else if (this.props.drawID === "movie_5" || this.props.drawID === "movie_7" || this.props.drawID === "movie_15"){
                money1 = ticket;
            }
            else{
                money1 = white;
            }
        }
        else {
            money1 = money;
        }
        let change = () => {
            if (this.props.userNow != "" && this.props.timeNow > 0){
                this.updateDB(this.props.drawID, true);
                this.updateUser(this.props.userNow, this.props.timeNow - 1);
                if (this.props.drawID === "lexus_5"){
                    document.getElementById(this.props.drawID).src=lexus;
                }
                else if (this.props.drawID === "ps4_10" || this.props.drawID === "ps4_13"){
                    document.getElementById(this.props.drawID).src=ps4;
                }
                else if (this.props.drawID === "tv_11" || this.props.drawID === "tv_1"){
                    document.getElementById(this.props.drawID).src=tv;
                }
                else if (this.props.drawID === "movie_5" || this.props.drawID === "movie_7" || this.props.drawID === "movie_15"){
                    document.getElementById(this.props.drawID).src=ticket;
                }
                else{
                    document.getElementById(this.props.drawID).src=white;
                }
            }
            else{
                alert("you do not log in or you dont have chances");
            }
        }
        return (
            <div><br></br>
                <input type="image" src={money1} id={this.props.drawID} width="200" height="200"
                onClick={change} />
            </div>
        )
    }
}
