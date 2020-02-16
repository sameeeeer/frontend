import axios from 'axios'
import React from 'react'
import AdminNavi from '../AdminNavi/AdminNavi'
import { NavLink , Switch, Route} from 'react-router-dom'

class UserDetail extends React.Component{
    DeleteTeacher = () =>{
        axios.delete('http://localhost:3000/del/' + this.props.hid)


    }

  render(){
    return(
 
      
      <div className="col-md-9 bg-white padding-2">
      <div className="row margin-top-20">
            <table id="example2" className="table table-hover">
              {/* <thead>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Phone No.</th>
                      <th>DOB</th>
                      <th>Gender</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Delete</th>
                    </thead> */}
                    <tbody>
                    
                      <tr>
                        <td>{this.props.fname}</td>
                        <td>{this.props.lname}</td>
                        <td>{this.props.number}</td>
                        <td>{this.props.dob}</td>
                        <td>{this.props.gender}</td>
                        <td>{this.props.email}</td>
                        <td>{this.props.password}</td>
                        <td><img src={"http://localhost:3000/image/" + this.props.images} width="50px" height="25px" className="img-responsive post-img" alt="avatar" /></td>
                  
                        <td>
                      
                <button type="button" className="btn btn-primary" onClick={this.DeleteTeacher} style={{marginRight:200,marginTop:15}}> <i className="fa fa-times" ></i> Delete </button>
                </td>
                      </tr>  
                
                    </tbody>   
                    </table>
                    </div>
          
           
</div>



         
         )
        }
        
 
 }
 export default UserDetail