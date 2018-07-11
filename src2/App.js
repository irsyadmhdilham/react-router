import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
//import { PrivateRoute } from '../_components';
//import { PrivateRoute } from './Components/PrivateRoute';
import Login from './Login/Login';
import Menu from './Menu/Menu';
import ForgotPassword from './Forgot/ForgotPassword';
//import './App.css';

class App extends Component {

  render() {
    return (
      // <div className="App">
       <Router>
       <React.Fragment>
         
                <Route exact path="/" component={Login} />
                <Route exact path="/ForgotPassword" component={ForgotPassword} />
                <Route exact path="/Menu" component={Menu} />
          
          </React.Fragment>
       </Router>
        
      // </div>
    );
  }
}

export default App;
