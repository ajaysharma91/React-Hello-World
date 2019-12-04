import React from 'react';
import './Home.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home1 from './Home1';
import Home2 from './Home2';
export default function Home(props){
    return (
        <Router>
        
        <div className="home" id={props.id}>
          <ul>
                <li><Link to="/home">Home 1 Table</Link></li>
                <li><Link to="/home/home2">Home 2 Table</Link></li>
            </ul>
         <Route path="/home" exact component={Home1}></Route>
         <Route path="/home/home2" component={Home2}></Route>
        </div>
        </Router>
                );
}