import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Pricing from './Pricing';
import Features from './Features';
export default ()=>{
    <BrowserRouter>
    <Switch>
         <Route path='/' exact component={ Home }></Route>
         <Route path='/pricing' component={ Pricing }></Route>
         <Route path='/features' component={ Features }></Route>
        
    </Switch>
 </BrowserRouter>
}