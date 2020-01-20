import React from 'react'



class Signuppage extends React.Component{
   
       render(){

        return(
            <div>
<div className="login-box">
  <div className="login-logo">
    <a href="/"><b>Blogg </b>For<b/> You</a>
  </div>
    <div className="login-box-body">
    <p className="login-box-msg">Candidates Registration</p>

          <form action="" method="post">           
                        <div className="form-group has-feedback">
                        <input className="form-control" type="text" required autocomplete="off" id="fname" placeholder="Full name *"/>
					
                        </div>
					  
                      <div className="form-group has-feedback">
                        <input className="form-control" type="text" required autocomplete="off" id="uname" placeholder="Username *"/>
						<span className="glyphicon glyphicon-user form-control-feedback"></span>
						  </div>
						  
            
                      <div className="form-group">
                        <input className="form-control" type="text" required autocomplete="off" id="sex" placeholder="sex *"/>
						</div>
            
                       <div className="form-group">
                        <input className="form-control" type="text" required autocomplete="off" id="nationality" placeholder="Nationality *"/>
                      </div>
            
                     <div className="form-group">
                      <input className="form-control" type="password" required autocomplete="off" id="pass" placeholder="Set A Password *"/>
					  
				    </div>
					
            <div className="col-xs-4">
                      <button type="submit" className="btn btn-primary btn-block btn-flat" id="signupbtn">Sign up</button>
					
            </div>
			
                    </form>
					</div>

 
 
  </div>			

            </div>

        )
       }
    }
       export default Signuppage
