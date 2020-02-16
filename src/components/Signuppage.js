import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import {
  Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap'


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
                    <Col>
                        <FormGroup>
                            <Label for='fname'>First Name</Label>
                            <input className="form-control" type="text" alue={this.state.fname} onChange={(event)=>
                        this.setState({fname: event.target.value})} placeholder="First name *" required/>
                          <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        </FormGroup>
                    </Col>

                    </div>      
                        <div className="form-group has-feedback">
                       <Col>
                        <FormGroup>
                            <Label for='lname'>Last Name</Label>
                            <input className="form-control" type="text" value={this.state.lname} onChange={(event)=>
                        this.setState({lname: event.target.value})} placeholder="Last name *" required/>
                          <span class="glyphicon glyphicon-user form-control-feedback"></span>
                        </FormGroup>
                    </Col>
                        </div>

                        <div className="form-group has-feedback">
                        <Col>
                        <FormGroup>
                            <Label for='number'>Phone number</Label>
                            <input className="form-control" type="text" value={this.state.number} onChange={(event)=>
                        this.setState({number: event.target.value})} placeholder="Phone number *" required/>
                          <span class="glyphicon glyphicon-phone form-control-feedback"></span>
                        </FormGroup>
                    </Col>
                        </div>

                        <div className="form-group has-feedback">
                        <Col>
                        <FormGroup>
                            <Label for='date'>DOB</Label>
                            <input className="form-control" type="date" value={this.state.dob} onChange={(event)=>
                        this.setState({dob: event.target.value})} placeholder="Date of birth*" required/>
                          <span class="glyphicon glyphicon-date form-control-feedback"></span>
                        </FormGroup>
                    </Col>
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
                        <Col>
                        <FormGroup>
                            <Label for='date'>Email</Label>
                            <input className="form-control" type="email" value={this.state.email} onChange={(event)=>
                        this.setState({email: event.target.value})} placeholder="Email *" required/>
						<span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </FormGroup>
                    </Col>
               </div>
               <div className="form-group has-feedback">
                        <Col>
                        <FormGroup>
                            <Label for='password'>password</Label>
                            <input className="form-control" type="password" value={this.state.password} onChange={(event)=>
                        this.setState({password: event.target.value})} placeholder="Set A Password *" required/>
						<span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </FormGroup>
                    </Col>
               </div>
               <div class="row">
        <div class="col-xs-8">
          <a href="login">Already have an Account ?</a>
        </div>

        <div class="col-xs-4">
        <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.sendUser}>Sign up</button>
                    
                
        </div>
       
      </div>
				
			
                    </form>
					</div>
          

 
 
  </div>			
</div>
       

        )
       }
    }
       export default Signuppage
