import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';



class Signuppage extends React.Component{
  constructor(){
    super();
    this.state = {
      'fname' : '',
      'lname' : '',
      'number' : '',
      'dob' : '',
      'gender' : '',
      'email' : '',
      'password' : '',
      redirect : false,
    }
  }

  sendUser = (e) =>{
    e.preventDefault();
    const data = {
      fname: this.state.fname,
      lname: this.state.lname,
      number: this.state.number,
      dob: this.state.dob,
      gender: this.state.gender,
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:3000/register',data).then(() => {

    this.setState({
      redirect : true
    })
    })



  }

  handleRedirect(){
   if(this.state.redirect){
     return <Redirect to='/login'/>
   }
 }

       render(){

        return(
            <div>
              {this.handleRedirect()}
<div className="login-box">
  <div className="login-logo">
    <a href="/"><b>Blogg </b>For<b/> You</a>
  </div>
    <div className="login-box-body">
    <p className="login-box-msg">Candidates Registration</p>

          <form>           
                        <div className="form-group has-feedback">
                        <input className="form-control" type="text" required autocomplete="off" value={this.state.fname} onChange={(event)=>
                        this.setState({fname: event.target.value})} placeholder="First name *"/>
					
                        </div>

                        <div className="form-group has-feedback">
                        <input className="form-control" type="text" required autocomplete="off" value={this.state.lname} onChange={(event)=>
                        this.setState({lname: event.target.value})} placeholder="Last name *"/>
					
                        </div>

                        <div className="form-group has-feedback">
                        <input className="form-control" type="number" required autocomplete="off" value={this.state.number} onChange={(event)=>
                        this.setState({number: event.target.value})} placeholder="Phone number *"/>
					
                        </div>

                        <div className="form-group has-feedback">
                        <input className="form-control" type="date" required autocomplete="off" value={this.state.dob} onChange={(event)=>
                        this.setState({dob: event.target.value})} placeholder="Date of birth*"/>
					
                        </div>

                        <div className="form-group has-feedback">
                  <label for="Gender">Gender:</label><br />
                  <div className="radio-inline">
                    <label><input type="radio" value={this.state.gender} onClick={(event)=>
                        this.setState({gender: "Male"})} name="gender" />Male</label>
                  </div>
                  <div className="radio-inline">
                    <label><input type="radio" value={this.state.gender} onClick={(event)=>
                        this.setState({gender: "Female"})} name="gender" />Female</label>
                  </div>
                  <div className="radio-inline">
                    <label><input type="radio" value={this.state.gender} onClick={(event)=>
                        this.setState({gender: "Others"})} name="gender" />Others</label>
                  </div>
                </div>
					  
                      <div className="form-group has-feedback">
                        <input className="form-control" type="email" required autocomplete="off" value={this.state.email} onChange={(event)=>
                        this.setState({email: event.target.value})} placeholder="Email *"/>
						<span className="glyphicon glyphicon-user form-control-feedback"></span>
						  </div>
              
                     <div className="form-group">
                      <input className="form-control" type="password" required autocomplete="off" value={this.state.password} onChange={(event)=>
                        this.setState({password: event.target.value})} placeholder="Set A Password *"/>
					  
				    </div>
					
            <div className="col-xs-4">
                      <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.sendUser}>Sign up</button>
                      
					
            </div>
			
                    </form>
					</div>

 
 
  </div>			
</div>
       

        )
       }
    }
       export default Signuppage
