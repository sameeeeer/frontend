import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Header from '../../components/UserNav/Header';
import Footer from'../../components/Footer';
import Adminpannel from '../../components/Admin/Adminpannel';
import axios from 'axios'



class AdminDashboard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          isLoggedIn: false
        }
        this.state = {
            user:{},
            id:"",
            posts:[],
            comment:"",
              config: {
                  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
              }
          }
      }

    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                this.setState({
                    id:response.data._id,
                    isLoggedIn: true,
                    user:response.data
                    }) 
            });
        axios.get("http://localhost:3000/findpost").then(res => {
            this.setState({ posts: res.data });
        })
        console.log(this.state.posts)
    }

  render(){
    if (this.state.isLoggedIn === false) {
        return <Redirect to='/' />
      }
  
        return(
            <div>
                <Header />
                <Adminpannel post={this.state.posts} user={this.state.user} />
                <Footer />

    
           
           
            </div>
           
        )
       }
       

}
export default AdminDashboard