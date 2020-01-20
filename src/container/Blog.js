import React from 'react'
import Blogpage from '../components/Blogpage';
import Header from '../components/UserNav/Header';
import Footer from '../components/Footer';



class Blog extends React.Component{
   
       render(){

        return(
            <div>
                <Header />
                <Blogpage />
                <Footer />

    
           
           
            </div>
           
        )
       }
       

}
export default Blog