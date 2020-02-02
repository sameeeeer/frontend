import React from 'react'



class Blogpage extends React.Component{
   
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
              <li><a href="Editprofile"><i className="fa fa-user"></i> Edit Profile</a></li>
              <li className="active"><a href="Blog"><i className="fa fa-envelope"></i> Post Blog</a></li>
              <li><a href="Mypost"><i className="fa fa-retweet"></i> My post</a></li>
              <li><a href="Logout"><i className="fa fa-arrow-circle-o-right"></i> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-9 bg-white padding-2">
      <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className="box-title">Add new Blog</h3>
          </div>
         
          <div className="box-body">
             <div className="form-group">
              <input className="form-control" name="Catagory" placeholder="Catagory:"/>
            </div>
  
     <div className="row form-group">
                
                    <div className="col-md-6"> <img id="blah" src="img/postdefault-image.jpg" alt="your image" height="300dp"/></div>
                    <input type="file" onchange="readURL(this);" id="image" name="image" className="btn btn-primary" id="btnChangePicture" value="" />
                </div>
            <div className="form-group">
              <textarea className="form-control input-lg" id="description" name="description" placeholder="Description"></textarea>
            </div>
          </div>
       
          <div className="box-footer">
            <div className="pull-right">
              <button type="submit" className="btn btn-primary"><i className="fa fa-envelope-o"></i> Post</button>
            </div>
            <a href="#" className="btn btn-primary"><i className="fa fa-times"></i> Discard</a>
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
export default Blogpage