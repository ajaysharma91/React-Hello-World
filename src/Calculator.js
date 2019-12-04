import React, { Component } from 'react';

export default class Calculator extends Component{

    constructor(props){
        super(props);
        this.state = {firstValue:'',secondValue:''}
        this.handleAll = this.handleAll.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(e)
    {
        e.preventDefault();
        if(e.target.value=='add')
        {
            var sum = parseInt(this.state.firstValue)+parseInt(this.state.secondValue);
            alert(sum);
        }
        else if(e.target.value=='Sub')
        {
            var sum = parseInt(this.state.firstValue)-parseInt(this.state.secondValue);
            alert(sum);
        }
        else
        {
            var sum = parseInt(this.state.firstValue)*parseInt(this.state.secondValue);
            alert(sum);
        }
         
        
    }
    handleAll(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return (
        <div>
            <input type="number" value={this.state.firstValue} name="firstValue" onChange={this.handleAll}/>
            <input type="number" value={this.state.secondValue} name="secondValue" onChange={this.handleAll}/>
            <button value="add" onClick={this.handleClick}>Add</button>
            <button value="Sub" onClick={this.handleClick}>Sub</button>
            <button value="mul" onClick={this.handleClick}>Multi</button>
        </div>
        );
    }
}