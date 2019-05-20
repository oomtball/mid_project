import React from 'react';
import './button.css';
export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <a href="#" class={this.props.buttonClass}><span>{this.props.buttonName}</span></a>  
            </div>
        )
    }
}
