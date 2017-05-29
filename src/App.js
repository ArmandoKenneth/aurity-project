import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div  className="container">
      <Route path='/' component={Main}/>    
        
      </div>
    );
  }
}

export default App;
