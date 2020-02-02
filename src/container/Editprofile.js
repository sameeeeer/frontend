import React from 'react'
import Editprofilepage from '../components/Editprofilepage';
import Header from '../components/UserNav/Header';
import Footer from '../components/Footer';
import axios from 'axios'



class Editprofile extends React.Component{
    
  render(){
        return(
            <div>
                <Header />
                <Editprofilepage />
                <Footer />

    
           
           
            </div>
           
        )
       }
       

}
export default Editprofile