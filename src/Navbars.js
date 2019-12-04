import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-scroll';
export default class Navbars extends Component{
    render (){
      return(
        
    <Navbar bg="dark" variant="dark" sticky="top" expanded>
     
  
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Link
    activeClass="active"
    to="home"
    spy={true}
    className="pl-5"
    smooth={true}
    offset={-50}
    duration= {500}
>Home</Link>
<Link
    activeClass="active"
    to="features"
    spy={true}
    smooth={true}
    offset={-50}
    duration= {500}
    className="pl-5"
>Features</Link>
<Link
    activeClass="active"
    className="pl-5"
    to="pricing"
    spy={true}
    smooth={true}
    offset={-50}
    duration= {500}
>Pricing</Link>

    {/* <Nav className="mr-auto">
      <Link to="/home" className="p-2">Home</Link>
      <Link to="/features" className="p-2">Features</Link>
      <Link to="/pricing" className="p-2">Pricing</Link>
    </Nav> */}
   
  </Navbar>
      )
    }
}
