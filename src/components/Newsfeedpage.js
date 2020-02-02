import React from 'react'

class Newsfeedpage extends React.Component{
       
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
            <li className="active"><a href="Newsfeed"><i className="fa fa-dashboard"></i> Newsfeed</a></li>
              <li><a href="Editprofile"><i className="fa fa-user"></i> Edit Profile</a></li>
              <li><a href="Blog"><i className="fa fa-envelope"></i> Post Blog</a></li>
              <li><a href="#"><i className="fa fa-gear"></i> Settings</a></li>
              <li><a href="#"><i className="fa fa-arrow-circle-o-right"></i> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-9 bg-white padding-2">
      <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
        <div className="box box-primary">
         
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
export default Newsfeedpage