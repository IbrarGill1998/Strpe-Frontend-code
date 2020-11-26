import React from 'react';

import './App.css';

import Auth from "./components/Auth"
 import Home from "./components/Home"
import About from "./components/About"
 import Listing  from "./components/Listing"
import Protected from  "./components/Protectted"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Auth/>
      <div>
      <Router>
        <Link to="Home">Home</Link><br/>
        <Link to="About">About</Link><br/>
        <Link to="Listing">Listing</Link>

        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <Protected cmp={About}/>
          </Route>
          <Route path="/Listing">
            <Listing />
          </Route>
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
