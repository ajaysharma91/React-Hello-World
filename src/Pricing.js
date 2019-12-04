import React from 'react';
import './Pricing.css';
import MainMen from './MainMen'; 
export default function Pricing(props){
    return (
        <div className="pricing" id={props.id}>
           <h1>Hello Pricing</h1>
           <MainMen/>
           
        </div>
    );
}