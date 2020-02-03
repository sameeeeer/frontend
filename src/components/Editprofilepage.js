import React from 'react'
import axios from 'axios'

class Editprofilepage extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      fname:'',
      lname:'',
      number:'',
      dob:'',
      gender:'',
      email:'',
      user:'',
      config:{
        headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}
      }
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3000/logincheck',this.state.config)
    .then((response) => {
      this.setState({
        user: response.data,
        fname:response.data.name,
        lname:response.data.lname,
        number:response.data.number,
        dob:response.data.dob,
        gender:response.data.gender,
        email:response.data.email
      })
     
    })
  }
  handlechange = (e) =>{
    this.setState(
      {[e.target.name]:e.target.value}
    )
  }
  // sendprofilepic = () => {
  //   var images = this.refs.images[0];
  //   let formdata = new FormData();
  //   formdata.append("images", images);
  //   axios.put('http://localhost:3000/upload/'+ this.state.user._id, formdata,this.state.config).then(function(){
  //     window.location.reload();
  //   })
  // }
  // sendprofile = () => {
  //   const data = {
  //       fname:this.state.fname,
  //       lname: this.state.lname,
  //       email: this.state.email,
  //       gender: this.state.gender, 
  //       number: this.state.number,
  //       dob: this.state.dob,
      
  
  //     }
  //   axios.put('http://localhost:3000/updates/'+ this.state.user._id, data,this.state.config).then(function(){
  //     window.location.reload();
  //   })
  // }
    render(){

        return(
            <div>
                
                <div className="content-wrapper" style={{marginleft: "0 px"}}>

<section id="candidates" className="content-header">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="box box-solid">
          <div className="box-header with-border">
            <h3 className="box-title">Welcome <b></b></h3>
          </div>
          <div className="box-body no-padding">
            <ul className="nav nav-pills nav-stacked">
            <li><a href="Newsfeed"><i className="fa fa-dashboard"></i> Newsfeed</a></li>
              <li className="active"><a href="Editprofile"><i className="fa fa-user"></i> Edit Profile</a></li>
              <li><a href="Blog"><i className="fa fa-envelope"></i> Post Blog</a></li>
              <li><a href="Mypost"><i className="fa fa-retweet"></i> My post</a></li>
              <li><a href="Logout"><i className="fa fa-arrow-circle-o-right"></i> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-9 bg-white padding-2">
            <h2><i>Edit Profile</i></h2>
            <div className="col-lg-4 order-lg-1 text-center">
                  <img src={"http://localhost:3000/image/" + this.state.user.images} width="150px" height="150px" className="mx-auto img-fluid img-circle d-block" alt="avatar" />
                  <br />
                  <h4><b>{this.state.user.fname}</b></h4>
                  <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Update Profile</button>
                  <div id="myModal" class="modal fade" role="dialog">
                      <div className="modal-dialog">

                          <div className="modal-content">
                              <div className="modal-header">
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                  <h4 className="modal-title">Update Profile</h4>
                              </div>
                              <div className="modal-body">
                                  <form >
                                      <div className="form-group">

                                          <label for="image">Image:</label><br />
                                          <input className="form-control" type="file" onChange={(event) =>
                                              this.setState({ images: event.target.images })} placeholder="Upload Image" />
                                      </div>
                                  </form>
                              </div>
                              <div className="modal-footer">
                                  <button type="button" onClick={this.sendprofilepic} className="btn btn-primary">Upload</button>
                              </div>
                          </div>
                          </div>
                          </div>
                          </div>
            <form>
              <div className="row">
                <div className="col-md-6 latest-job ">
                  <div className="form-group">
                     <label for="fname">First Name</label>
                    <input type="text" className="form-control input-lg" id="fname" name="fname" placeholder="First Name" value={this.state.user.fname}/>
                  </div>
                  <div className="form-group">
                    <label for="lname">Last Name</label>
                    <input type="text" className="form-control input-lg" id="lname" name="lname" placeholder="Last Name" value={this.state.user.lname}/>
                  </div>
                  <div className="form-group">
                    <label for="number">Phone number</label>
                    <input type="number" name="number" className="form-control input-lg" placeholder="Number" value={this.state.user.number} />
                  </div>
                  <div className="form-group">
                    <label for="dob">Date of birth</label>
                    <input type="text" name="dob" className="form-control input-lg" placeholder="dob" value={this.state.user.dob} />
                  </div>
                  <div className="form-group">
                    <label for="gender">Gender</label>
                    <input type="gender" className="form-control input-lg" id="gender" placeholder="gender" value={this.state.user.gender}/>
                  </div>
                  <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control input-lg" id="email" placeholder="Email" value={this.state.user.email} readonly />
                  </div>
                  
                 
                  <div className="form-group">
                    <button type="submit" className="btn btn-flat btn-primary">Update Profile</button>
                  </div>
                </div>
              </div>
            </form>
              </div>
            </div>
          </div>
          </section>
          </div>

    

  </div>
           
        )
       }
}
export default Editprofilepage