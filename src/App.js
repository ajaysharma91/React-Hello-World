import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbars from './Navbars';
import Home from './Home';
import Features from './Features';
import Pricing from './Pricing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Home1} from './Home1';
import {Home2} from './Home2';
import Handleevent from './Handleevent';
import Calculator from './Calculator';
function App(props) {
  return (
    <Router>
    <div>
    <Navbars/>
    <Home id="home"/>
    <Features  id="features"/>
    <Pricing  id="pricing"/>
    {/* <Switch>
    <Route path="/home" exact  component={Home} />
    <Route path="/features" component={Features} />
    <Route path="/pricing" component={Pricing} />
    </Switch>
    <h1>Hello Mr. {props.name}</h1>
    <Handleevent />
    <Calculator /> */}

    </div>
    </Router>
  );
}

export default App;
