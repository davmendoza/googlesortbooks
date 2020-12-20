import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Books from './components/Books/Books';
import SavedBooks from './components/SavedBooks/SavedBooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
        <Route path="/savedbooks">
        <Header/>
        <SavedBooks/>
        </Route>
          <Route path="/">
        <Header/>
        <Books/>
        </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
