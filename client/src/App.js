import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom'
import Routes from './components/routes'
import Header from './components/shared/Header'


function App() {
  return (
    <div className="App">
      <Header />  
      <Routes />
    </div> 
  );
}

export default withRouter(App);
