import React from 'react'
import Loginpage from '../components/Loginpage';
import Header from '../components/Header';
import Footer from '../components/Footer';



class Login extends React.Component{
   
       render(){

        return(
            <div>
                <Header />
                <Loginpage />
                <Footer />

    
           
           
            </div>
           
        )
       }
       

}
export default Login
