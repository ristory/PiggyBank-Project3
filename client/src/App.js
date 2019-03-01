import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'
import AccountInfo from './components/AccountInfo'
import MainPage from './components/MainPage'
import PropTypes from 'prop-types';
import Savings from './components/Savings';
import Spendings from './components/Spendings';
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';



class App extends Component {
  render () {
    
    return (
      
        <Router>
          <div>           
            <Route exact path='/' component={Home} />
            <Route path='/Account' component={Account} />
            <Route path='/AccountInfo' component={AccountInfo} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/Home' component={Home} />
            <Route path='/MainPage' component={MainPage} />
            <Route path='/Savings' component={Savings} />
            <Route path='/Spendings' component={Spendings} />
            <Route path='/SignIn' component={SignIn} />
          </div>
        </Router>
        
    );
  } 
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;