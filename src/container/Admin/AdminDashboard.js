import React from 'react'
import Header from '../../components/UserNav/Header';
import Footer from'../../components/Footer';
import Adminpannel from '../../components/Admin/Adminpannel';



class AdminDashboard extends React.Component{
  render(){
        return(
            <div>
                <Header />
                <Adminpannel />
                <Footer />

    
           
           
            </div>
           
        )
       }
       

}
export default AdminDashboard