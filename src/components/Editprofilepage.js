import React from 'react'

class Editprofilepage extends React.Component{
       
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
            <form action="update-profile.php" method="post" enctype="multipart/form-data">
              <div className="row">
                <div className="col-md-6 latest-job ">
                  <div className="form-group">
                     <label for="fname">First Name</label>
                    <input type="text" className="form-control input-lg" id="fname" name="fname" placeholder="First Name" value="" />
                  </div>
                  <div className="form-group">
                    <label for="lname">Last Name</label>
                    <input type="text" className="form-control input-lg" id="lname" name="lname" placeholder="Last Name" value=""/>
                  </div>
                  <div className="form-group">
                    <label for="number">Phone number</label>
                    <input type="number" name="number" className="form-control input-lg" placeholder="Number" />
                  </div>
                  <div className="form-group">
                    <label for="dob">Date of birth</label>
                    <input type="date" name="dob" className="form-control input-lg" placeholder="dob" />
                  </div>
                  <div className="form-group">
                    <label for="gender">Gender</label>
                    <input type="gender" className="form-control input-lg" id="gender" placeholder="gender" value=""/>
                  </div>
                  <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control input-lg" id="email" placeholder="Email" value="" readonly />
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