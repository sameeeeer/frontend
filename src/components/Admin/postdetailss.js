import React, { Component } from 'react';
import axios from 'axios';

class Postdetailss extends Component {



  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.state = {
      all_comments :[],
          comment:"",
          user_id : this.props.post.user_id._id,
          post_id : this.props.post._id,
          config: {
              headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          }
      }

      // console.log(this.props.post)
  }

  handleChange = (e) => {
    this.setState(
        { [e.target.name]: e.target.value }
    )
  }
  handledelete(id, index){
    axios.delete("http://localhost:3000/deletepost/" + id).then((res)=>{
       window.location.reload(); 
    })
  }


    render() {
        return (
    <div className="col-md-9 bg-white padding-2">
          <div className="row margin-top-20">
                <table id="example2" className="table table-hover">
                  <thead>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>category</th>
                          <th>status</th>
                          <th>Delete</th>
                        </thead>
                        <tbody>
                          <tr>
                          <td>
                          <p>{this.props.post.user_id.fname}</p>
                          </td>
                          <td>
                          <p>{this.props.post.user_id.lname}</p>
                          </td>
                            <td>
                          <p>{this.props.post.category}</p>
                          </td>
                            <td> <p>{this.props.post.status}</p></td>
                            <td>
                              <img src={"http://localhost:3000/image/" + this.props.post.image} width="50px" height="25px" className="img-responsive post-img" alt="avatar" />
                              </td>
                              <td>
                              <button type="button" className="btn btn-primary" onClick={this.deletepost} style={{marginRight:200,marginTop:15}}  onClick= {()=> this.handledelete(this.props.post._id)}> <i className="fa fa-times" ></i> Delete </button>
                              </td>
                              </tr>
                              </tbody>
                              </table>
                              </div>
    
        </div>
                 )
    }
}
export default Postdetailss;