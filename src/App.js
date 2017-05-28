import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Route path='/' component={Main}/>    
    );
  }
}

export default App;
