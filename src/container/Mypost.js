import React from 'react'
import Mypostpage from '../components/Mypostpage';
import Header from '../components/UserNav/Header';
import Footer from '../components/Footer';

class Mypost extends React.Component{
    render(){
          return(
              <div>
                  <Header />
                  <Mypostpage />
                  <Footer />
  
      
             
             
              </div>
             
          )
         }
         
  
  }
  export default Mypost