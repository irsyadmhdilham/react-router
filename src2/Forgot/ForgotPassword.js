import React, {Component} from 'react';

import '../Login/style.css';

class ForgotPassword extends Component {
    render(){
        return(
            <div className="container">
   
   <div className="col-md-5 col-lg-5 col-md-offset-13 login-form text-center">
      <div className="form-top">
         <div className="form-top-left">
            <h3>Forgot your password?</h3>
            <p>Not to worry. Just enter your email address below and we'll send you an email for recovery.</p>
         </div>
      </div>
      <form action="" method="post" id="checkemail">
         <div className="input-group col-lg-10 col-md-offset-1">
            <span className="input-group-addon"><i className="glyphicon glyphicon-send"></i></span>
            <input className="form-control" placeholder="Email address" type="email" name="email" id="email" required/>  
         </div>
         
         <button className="btn btn-danger btn-block col-xs-6 col-lg-11" id="resetpass">RESET PASSWORD</button>
         <div className="form-footer">
            <div className="row">
               <div className="col-xs-7 blink">
                  <spam id="chngerror"></spam>
               </div>
            </div>
         </div>
      </form>
      
   </div>
</div>
        )
    }
}

export default ForgotPassword;