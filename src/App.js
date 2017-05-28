import React, { Component } from 'react';
import {BrowserRouter, Link, Route } from 'react-router-dom';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Route path='/' component={Main}/>    
    );
  }
}

export default App;
