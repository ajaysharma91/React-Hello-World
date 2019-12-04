import React, { Component } from 'react'

export default class Handleevent extends Component{
   constructor(props){
       super(props);
       this.state={isToggleOn:true};
       this.handleClick = this.handleClick.bind(this);
   }
   handleClick(){
    this.setState(state=>({
        isToggleOn:!state.isToggleOn
    }));
}
   handleLogging = ()=>{
       alert(this);
   }
    render(){
        return(
            <div>
            <button onClick={this.handleClick}>{this.state.isToggleOn ?'ON':'OFF'}</button>
            <button onClick={this.handleLogging}>Login</button>
            </div>
        );
    }
}