import React from 'react'
import Adminpannel from '../../components/Admin/Adminpannel'
import axios from 'axios'
import Header from '../../components/UserNav/Header'
import Footer from '../../components/Footer'



class AdminDashboard extends React.Component{
  render(){
        return(
            <div>
            <Header/>
            <Adminpannel />
            <Footer/>
            </div>
           
        )
       }
       

}
export default AdminDashboard