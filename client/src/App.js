import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Lost from "./components/Lost";
import Home from "./components/Home";

class App extends Component {
  render(){
    return (
      <div className="container-fluid">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">  <Home />  </Route>
            <Route>   <Lost/>   </Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
