import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom'
import Home from './components/routes/Home'
import SignIn from './components/routes/SignIn';
import TeamRoster from './components/routes/TeamRoster';
import Header from './components/shared/Header'
import AvailableCoders from './components/routes/AvailableCoders';
import SignUp from './components/routes/SignUp'


function App() {
  return (
    <div className="App">
      <Header />
     <Route exact path='/' component={Home} />
     <Route exact path='/teamroster' component={TeamRoster} />
     <Route exact path='/availablecoders' component={AvailableCoders} />
     <Route exact path='/sign-up' component={SignUp} />
     <Route exact path='/sign-in' component={SignIn} />

    </div> 
  );
}

export default withRouter(App);
