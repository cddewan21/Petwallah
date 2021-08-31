import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./NavBar1";
import Navbar2 from "./NavBar2";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1><Navbar /></h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dogfood"   
        
        render={(props) => (
          <Service category="dogfood" isAuthed={true} />
        )}
        
        />

      <Route exact path="/dogtreat"
        
        render={(props) => (
          <Service category="dogtreat" isAuthed={true} />
        )}
        
        />


       <Route exact path="/cattreat"
        
        render={(props) => (
          <Service category="cattreat" isAuthed={true} />
        )}
              />



<Route exact path="/catfood"
        
        render={(props) => (
          <Service category="catfood" isAuthed={true} />
        )}
              />

<Route exact path="/pedigree"
        
        render={(props) => (
          <Service brand="pedigree" isAuthed={true} />
        )}
              />

<Route exact path="/royalcanin"
        
        render={(props) => (
          <Service brand="royalcanin" isAuthed={true} />
        )}
              />

              
<Route exact path="/Farmina"
        
        render={(props) => (
          <Service brand="Farmina" isAuthed={true} />
        )}
              />

<Route exact path="/Purina"
        
        render={(props) => (
          <Service brand="Purina" isAuthed={true} />
        )}
              />



      <Route exact path="/itemonsale"
        
        render={(props) => (
          <Service itemonsale="sale" isAuthed={true} />
        )}
              />

        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />


      </Switch>
      <Navbar2 />

      <Footer />
    </>
  );
};

export default App;
