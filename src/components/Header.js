import React from 'react'



class Header extends React.Component{
   
       render(){

        return(
<div>
<header class="main-header">


<a href="index.html" class="logo  ">

  <span class="logo-mini"><b>B</b><b>For</b>you</span>

  <span class="logo-lg"><b>Blogg </b><b>For </b>you </span>
</a>


<nav class="navbar navbar-static-top">
 
  <div class="navbar-custom-menu">
    <ul class="nav navbar-nav">
      <li>
        <a href="login.html">Login</a>
      </li>
      <li>
        <a href="signup.html">Sign Up</a>
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
