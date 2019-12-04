import React from 'react';
import logo from './logo.svg';

import Navbars from './Navbars';
import Home from './Home';
import Features from './Features';
import Pricing from './Pricing';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Home1} from './Home1';
import {Home2} from './Home2';
import Navbars1 from './Navbar1';
import Handleevent from './Handleevent';
import Calculator from './Calculator';
function App1() {
  return (
    <Router>
    <div>
    <Navbars/>

   <Home/>
   <Features/>
   <Pricing/>
    </div>
    </Router>
  );
}

export default App1;
