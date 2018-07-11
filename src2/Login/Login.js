import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, withRouter, Redirect } from "react-router-dom";
import axios from 'axios';

import './bootstrap.min.css';
import './style.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userid: "",
          password: "",
          submitted: false
      }
        
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        handleChange(event, input) {
          switch(input) {
            case 'username':
              this.setState({userid: event.target.value})
            break;
            case 'password':
              this.setState({password: event.target.value})
          }
        }
    
    
        handleSubmit(e) {
          e.preventDefault()
    
          axios.post('http://192.168.0.102:8080/crimescape/security/login', {
            userId: this.state.userid,
            password: this.state.password 
          }).then(response => {
            const data = response.data
            const user = data.name,
                  pass = data.password,
                  retCode = data.status.statusCode
                  console.log(retCode)
            if (retCode === 0) {
               this.setState({submitted: true})
              // location.replace('./Menu/')
              const { push } = this.props.history
              push('/Menu')
            }
          }).catch(err => {
            console.log(err)
          })
        }
    
    handleClick(event){
        alert('test');
        this.window.location.replace('../Forgot/');
    }

    render(){
        const { loggingIn } = this.props;
        const { userid, password, submitted } = this.state;
      return(
            <div className="container">
   <div className="col-md-5 col-md-offset-13 login-form text-center">
      <div className="form-top">
         <div className="form-top-left">
            <h3>LOGIN PAGE</h3>
            <p>Please enter your userID and password</p>
         </div>
      </div>
      <form id="form1" onSubmit={this.handleSubmit}>
         <div className="input-group col-lg-10 col-md-offset-1">
            <span className="input-group-addon">
            <i className="glyphicon glyphicon-user"></i>
            </span>
            <input 
                className="form-control" 
                placeholder="UserId" 
                name="userid" 
                id="userid" 
                value={userid}
                type="text" required
                onChange={event => this.handleChange(event, 'username')}/>  
         </div>
         <div className="input-group  col-lg-10 col-md-offset-1">
            <span className="input-group-addon">
            <i className="glyphicon glyphicon-lock"></i>
            </span>
            <input 
                type="password" 
                name="password" 
                id="password" 
                value={password}
                className="form-control" 
                placeholder="Password" required
                onChange={event => this.handleChange(event, 'password')}/>
         </div>
         <button className="btn btn-danger btn-block col-xs-6 col-lg-11" id="login">LOGIN</button>
      </form>
      <div className="form-footer">
         <div className="row">
            <div className="col-xs-7 blink">
               <i className="fa fa-unlock-alt"></i>
               
               <Link to="/ForgotPassword">
               Forgot password?</Link>
             
               {/* 
               <Link to="" id="forgot_from_1" onClick={this.handleClick}>
               Forgot password?</Link><br/> */}
            </div>
         </div>
      </div>
   </div>
</div> 
        )
    }
}

export default Login;