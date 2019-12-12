import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom'
import Routes from './components/routes'
import Header from './components/shared/Header'
import Container from './components/shared/Container';

function App() {
  return (
    <div className="App">
      {/* <Header />   */}
      {/* <Routes /> */}
      <Container />
    </div> 
  );
}

export default withRouter(App);
