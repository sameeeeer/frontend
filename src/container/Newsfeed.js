import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Newsfeedpage from '../components/Newsfeedpage';
import Header from '../components/UserNav/Header';
import Footer from '../components/Footer';
import axios from 'axios'
class Newsfeed extends React.Component{constructor(props) {
        super(props)
        this.state = {
          isLoggedIn: false
        }
        this.state = {
            user:{},
            posts:[],
              config: {
                  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
              }
          }
      }

    componentDidMount() {
        axios.get('http://localhost:3000/logincheck', this.state.config)
            .then((response) => {
                this.setState({
                    isLoggedIn: true,
                    user:response.data
                    })
            });
        axios.get("http://localhost:3000/findpost").then(res => {
            this.setState({ posts: res.data });
        })
    }
    render(){
        if (this.state.isLoggedIn === false) {
            return <Redirect to='/' />
          }
          return(
              <div>
                  <Header />
                  <Newsfeedpage post={this.state.posts} user={this.state.user} />
                  <Footer />
  
      
             
             
              </div>
             
          )
         }
         
  
  }
  export default Newsfeed