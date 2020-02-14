import axios from 'axios'
import React from 'react'

class Navi extends React.Component{
        
LogOut=()=>{
    //delete token in browser and logout from backend
    axios.post('http://localhost:3000/logout')
    localStorage.removeItem('token')
    
  
  }

       render(){

        return(
<div className="col-md-3">
<div className="box box-solid">
  <div className="box-header with-border">
    <h3 className="box-title">Welcome <b></b></h3>
  </div>
  <div className="box-body no-padding">
    <ul className="nav nav-pills nav-stacked">
    <li><a href="Newsfeed"><i className="fa fa-dashboard"></i>Dashboard</a></li>
      <li><a href="Editprofile"><i className="fa fa-user"></i> Post detail</a></li>
      <li><a href="Blog"><i className="fa fa-envelope"></i> User list</a></li>
      <li><a href="Mypost"><i className="fa fa-retweet"></i> My post</a></li>
      <li><a href="Login" onClick={this.LogOut}><i className="fa fa-arrow-circle-o-right"></i> Logout</a></li>
    </ul>
  </div>
</div>
</div>
         
         )
        }
        
 
 }
 export default Navi