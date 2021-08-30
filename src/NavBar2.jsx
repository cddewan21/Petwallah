import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import './App.css';


const NavBar1 = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar  expand="lg" bg="dark" >
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  
<ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    
    <ReactBootStrap.Nav.Link href="/about">about</ReactBootStrap.Nav.Link>
   

    <ReactBootStrap.Nav.Link href="/contact">contact</ReactBootStrap.Nav.Link>

  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar1;