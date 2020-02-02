import React from 'react'
import Newsfeedpage from '../components/Newsfeedpage';
import Header from '../components/UserNav/Header';
import Footer from '../components/Footer';

class Newsfeed extends React.Component{
    render(){
          return(
              <div>
                  <Header />
                  <Newsfeedpage />
                  <Footer />
  
      
             
             
              </div>
             
          )
         }
         
  
  }
  export default Newsfeed