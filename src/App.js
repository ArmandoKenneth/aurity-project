import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import Main from './components/Main';

class App extends Component {
  render() {
    let appStyle = {
      minWidth: "325px"
    }

    return (
      <div  className="container" style={appStyle}>
        <Route path='/' component={Main}/>    
        
      </div>
    );
  }
}

export default App;
