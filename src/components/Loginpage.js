import React from 'react'



class Loginpage extends React.Component{
   
       render(){

        return(
            <div>
<div className="login-box">
  <div className="login-logo">
    <a href="index.php"><b>Blogg </b>For<b/> You</a>
  </div>
    <div className="login-box-body">
    <p className="login-box-msg">Candidates Login</p>

    <form className="form login" method="post">

      <div className="form-group has-feedback">
       <input className="form-control" type="text" required autocomplete="off" name="username" id="username"  placeholder="Username *" required />
		      <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>

       <div className="form-group has-feedback">
       
        <input className="form-control" type="password" required autocomplete="off" name="password" id="password" placeholder="Password *" required />
		 <span className="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>

          <div className="row">
        <div className="col-xs-8">
          <a href="#">I forgot my password</a>
        </div>
<div className="col-xs-4">
      <button className="btn btn-primary btn-block btn-flat" id="loginbtn">Log In</button>
 </div>
 </div>
 
    </form>

 
  </div>
  </div>
 
           
            </div>
           
        )
       }
       

}
export default Loginpage
