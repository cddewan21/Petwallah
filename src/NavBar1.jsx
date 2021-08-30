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
  <ReactBootStrap.Navbar.Brand href="#home">Pet Wallah</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  
<ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootStrap.Nav className="ml-auto narbar-expand-xl"> 
    
    <ReactBootStrap.Nav.Link href="/about">about</ReactBootStrap.Nav.Link>
   
    <ReactBootStrap.NavDropdown title="Dog" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/service">Dog Food</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/service">Dog Treat</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/service">Dog Gromming</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="/service">Cattoys</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.NavDropdown title="Cat" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/service">Cat Food</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/service">Cat Treat</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/service">Cat Gromming</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="/service">Cattoys</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>


    <ReactBootStrap.Nav>
    <ReactBootStrap.NavDropdown title="shop By Brands" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/service">pedigree</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/service">royal-canin</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="/service">Purina</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>

    <Link to="/contact">
    <ReactBootStrap.Nav.Link href="/contact">contact</ReactBootStrap.Nav.Link>
    </Link>

  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar1;