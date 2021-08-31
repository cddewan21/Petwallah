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
      <div>
        <row>
       
        <p>
  <h1><ReactBootStrap.Navbar.Brand href="#home">Pet Wallah</ReactBootStrap.Navbar.Brand></h1>
  </p>

        </row>

  </div>
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  
<ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootStrap.Nav className="ml-auto narbar-expand-xl"> 
    
  
    <ReactBootStrap.NavDropdown title="Dog" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/dogfood">Dog Food</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/dogtreat">Dog Treat</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/service">Dog Gromming</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="/service">Dogtoys</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.NavDropdown title="Cat" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/catfood">Cat Food</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/cattreat">Cat Treat</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/Cat">Cat Gromming</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="/Cat">Cattoys</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>


    <ReactBootStrap.Nav>
    <ReactBootStrap.NavDropdown title="shop By Brands" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/pedigree">pedigree</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/royalcanin">royal-canin</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/Farmina">Farmina</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="/Purina">Purina</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>

    <ReactBootStrap.Nav.Link href="/itemonsale">Sale</ReactBootStrap.Nav.Link>

  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar1;