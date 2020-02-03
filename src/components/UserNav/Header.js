import React from 'react'
import axios from 'axios'



class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.state = {
      user: {},
      config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/logincheck', this.state.config)
      .then((response) => {
        this.setState({
          isLoggedIn: true,
          user: response.data
        })
      });


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
  
  </div>
</nav>
</header>
            </div>
           
        )
       }
       

}
export default Header
