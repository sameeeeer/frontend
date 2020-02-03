import React from 'react'
import axios from 'axios'


class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }
    
    this.state = {
          config: {
              headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          }
      }
  
  }

  componentDidMount() {
    axios.get('http://localhost:3000/logincheck', this.state.config)
        .then((response) => {
            this.setState({ isLoggedIn: true })
        });
}

 // form handler
  handleChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }
  //login function  handler 
  submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', this.state)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        this.setState({ isLoggedIn: true })
      }).catch((err) => console.log(err.response))
    this.setState({ email: '', password: '' })
  }
 
       render(){

        return(
<div>
<header class="main-header">


<a href="/" class="logo  ">

  <span class="logo-mini"><b>B</b><b>For</b>you</span>

  <span class="logo-lg"><b>Blogg </b><b>For </b>you </span>
</a>


<nav class="navbar navbar-static-top">
 
  <div class="navbar-custom-menu">
    <ul class="nav navbar-nav">
      <li>
        <a href="Login">Login</a>
      </li>
      <li>
        <a href="Signup">Sign Up</a>
      </li>  
    </ul>
  </div>
</nav>
</header>
            </div>
           
        )
       }
       

}
export default Header
