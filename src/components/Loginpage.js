import React, { Component }from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';

import {
  Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap'


class Loginpage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
        user_type:'',
        isLoggedIn: false
    }
}
handleChange = (e) => {
    this.setState(
        { [e.target.name]: e.target.value }
    )
}
submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', this.state)
        .then((response) => {
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user_type', response.data.user.user_type)
            // alert(response.data.user.user_type)
            this.setState({ isLoggedIn: true })

        }).catch((err) => console.log(err.response))
    this.setState({ email: '', password: '' })
}
render() {
// alert(localStorage.getItem('user_type'))
    if (this.state.isLoggedIn === true && localStorage.getItem('user_type')=="user") {
        return <Redirect to='/blog' />
    }  if (this.state.isLoggedIn === true && localStorage.getItem('user_type')=="admin" ) {
        return <Redirect to='/AdminDashboard' />
    }
    return (
   <div>
<div className="login-box">
  <div className="login-logo">
    <a href="index.php"><b>Blogg </b>For<b/> You</a>
  </div>
    <div className="login-box-body">
    <p className="login-box-msg">Candidates Login</p>
                <Form>
                <div className="form-group has-feedback">
                    <Col>
                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <Input type='email'  class="form-control" name='email' id='email' value={this.state.email} onChange={this.handleChange} />
                            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </FormGroup>
                    </Col>
                    </div>
                    <div class="form-group has-feedback">
                    <Col>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input type='password' class="form-control" name='password' id='password' value={this.state.password} onChange={this.handleChange} />
                            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                        </FormGroup>
                    </Col>
                    </div>
                    <div class="row">
        <div class="col-xs-8">
          <a href="#">I forgot my password</a>
        </div>

        <div class="col-xs-4">
        <Button class="btn btn-primary btn-block btn-flat" color="primary" onClick={this.submitForm} type="submit">Submit</Button>
                    
                
        </div>
       
      </div>
                 
</Form>
 

 </div>
 
           </div>
           </div>
            
           
        )
       }
       

}
export default Loginpage
