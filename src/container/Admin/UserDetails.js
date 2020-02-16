import React from 'react'
import UserDetail from '../../components/Admin/UserDetail'
import axios from 'axios';
import Header from '../../components/UserNav/Header';
import Footer from'../../components/Footer';
import AdminNavi from '../../components/AdminNavi/AdminNavi'
class UserDetails extends React.Component{
    state = {
        mydata : []
    }
    componentDidMount(){
        axios.get("http://localhost:3000/urs").then(res=>{
        console.log(res)
        this.setState({mydata : res.data})
        })
        }
       
    render(){
        const mydata222 = this.state.mydata.map(hlists=>{
            return <UserDetail hid={hlists._id} fname={hlists.fname} lname={hlists.lname} number={hlists.number}
             dob={hlists.dob} gender={hlists.gender} email={hlists.email} password={hlists.password} images={hlists.images}/>
             
            })
           
        return(

            <div className="content-wrapper" style={{marginleft: "0 px"}}>
     <Header />
              
            <section id="candidates" className="content-header">
            <div className="container">
              <div className="row">
            <AdminNavi />
            <div className="content-wrapper" style={{marginleft: "0 px"}}>
<h3>User Details</h3>

<div className="col-md-9 bg-white padding-2">
                    {mydata222}
                              </div>
                  
               
                  </div>
            </div>
            </div>
            </section>
                <Footer />
            </div>

)


    }
}

export default UserDetails