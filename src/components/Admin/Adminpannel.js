import axios from 'axios'
import React from 'react'
import AdminNavi from '../AdminNavi/AdminNavi'

class Adminpannel extends React.Component{

       render(){

        return(
              <div className="content-wrapper" style={{marginleft: "0 px"}}>

<section id="candidates" className="content-header">
<div className="container">
  <div className="row">
<AdminNavi />
</div>
</div>
</section>
</div>
         
         )
        }
        
 
 }
 export default Adminpannel