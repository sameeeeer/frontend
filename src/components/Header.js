import React from 'react'



class Header extends React.Component{
   
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
