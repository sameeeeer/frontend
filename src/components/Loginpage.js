import React, { Component }from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';




class Loginpage extends React.Component{
  constructor(){
    super();
    this.state = {
      registerError:'',
      loading:false,
      formdata:{
          email:{
              value:'',
              config:{
                  name:'email_input',
                  type:'email',
                  placeholder:'Enter your email'
              },
              validation:{
                  required:true,
                  email:true
              }
            },
            password:{
                value:'',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter your password'
                },
                validation:{
                    required:true,
                    password:true
                }
            }
        }
      }
    }
  loginuser = (e) =>{
    e.preventDefault();
   // alert("dsafdafdsafdsafd")
    const data = {
    
      email: this.state.email,
      password: this.state.password
    }
    
    axios.post('http://localhost:3000/login',data).then(() => {

    this.setState({
      redirect : true
    })
    })

    
   
  }

  handleRedirect(){
   if(this.state.redirect){
     return <Redirect to='/Blog'/>
   }
 }
       render(){

        return(
   <div>
      {this.handleRedirect()}
<div className="login-box">
  <div className="login-logo">
    <a href="index.php"><b>Blogg </b>For<b/> You</a>
  </div>
    <div className="login-box-body">
    <p className="login-box-msg">Candidates Login</p>

    <form className="form login" method="post">

    <div className="form-group has-feedback">
                        <input className="form-control" type="email" required autocomplete="off" value={this.state.email} onChange={(event)=>
                        this.setState({email: event.target.value})} placeholder="Email *"/>
						<span className="glyphicon glyphicon-user form-control-feedback"></span>
						  </div>

       <div className="form-group has-feedback">
                      <input className="form-control" type="password" required autocomplete="off" value={this.state.password} onChange={(event)=>
                        this.setState({password: event.target.value})} placeholder="Password*"/>
                        	<span className="glyphicon glyphicon-lock form-control-feedback"></span>
					  
				    </div>
          <div className="row">
        <div className="col-xs-8">
          <a href="#">I forgot my password</a>
        </div>
<div className="col-xs-4">
<button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.loginuser}>Login</button>
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
