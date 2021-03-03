import '../Styles/buttonCard.css';
import React , { Component } from "react";
import Switch from './switches.js';


class ButtonCard extends Component{
  render(){
    return(
    <div className = "buttonCard" appliancename = "" image = "" checked doer>
        
        <img className = "buttonImage" src = {this.props.image} alt=""></img>
        <h3>{this.props.appliancename}</h3>
        <Switch className= "mySwitch" checked = {this.props.checked} doer={this.props.doer}/>
    
    </div>
    );
  }
}
export default ButtonCard;
