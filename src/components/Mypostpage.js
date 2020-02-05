import React from 'react'
import axios from 'axios'
import Post from './post';
import { Redirect } from 'react-router';

class Mypostpage extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        id:'',
        post_status :'',
        profileimage: '',
        name:'',
        post: [],
        user: {},
        config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
}
componentDidMount() {
    axios.get('http://localhost:3000/logincheck', this.state.config)
        .then((response) => {
          //alert(response.data._id);
            this.setState({
                id:response.data._id,
                user: response.data,
                name:response.data.name,
                email:response.data.email,
                phone:response.data.phone,
                gender:response.data.gender,
                dob:response.data.dob
            })
            //alert(response.data._id)
            axios.get('http://localhost:3000/findpostbyuserid/' + response.data._id, this.state.config)
                .then((response) => {
               console.log(response.data)
                  this.setState({post : response.data})


                })

        })
}

handledelete(id, index){
  axios.delete("http://localhost:3000/deletepost/" + id).then((res)=>{
    this.state.post.splice();
     window.location.reload(); 
  })
}
handlechange = (e) =>{
  this.setState(
    {[e.target.name]:e.target.value}
  )
}

 render(){
  //post design foreach loop
  const photoblog = this.state.post.map((post) => {
  return(
  <div className='row post'>
  
        
 <div className="col-md-12 color-white">
      <img src={"img/avataaar.png"} style={{marginTop:15}} className="img-circle" height="45px" width="45px" />
      <a href=""><strong>{post.user_id.fname  + " " + post.user_id.lname}</strong></a>
    
  </div>

  <div className="col-md-12">
      <p>{post.category}</p>
  </div>

  <div className="col-md-12">
      <p>{post.status}</p>
  </div>

  <div className="col-md-12">
      <img src={"http://localhost:3000/image/" + post.image} className="img-responsive post-img" width="70%" />
  </div>
  <div className="pull-right">
              <button type="button" className="btn btn-primary" onClick={this.deletepost} style={{marginRight:200,marginTop:15}}  onClick= {()=> this.handledelete(post._id)}> <i className="fa fa-times" ></i> Delete </button>
   </div>
   <div className="pull-left">
              <button type="button" className="btn btn-primary" style={{marginTop:15}} data-toggle="modal" data-target="#myModal"> <i className="fa fa-comment" ></i> Update</button>
              <div id="myModal" class="modal fade" role="dialog">
              <div className="modal-dialog">
         <div className="modal-content">
          <div className="modal-header">
              <form >
                                      <div className="form-group">
                                      <input className="form-control" type="text" placeholder="Category"/><br />
                                     <textarea className="form-control" type="text" placeholder="Status"/>
                                    
                                      </div>
                                    </form>
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-primary">Update</button>
                                  </div>
                                    </div>
                                    </div>
                                    </div>
                  </div>
            </div>
            
  </div>
  )
})
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
              <li><a href="Blog"><i className="fa fa-envelope"></i> Post Blog</a></li>
              <li className="active"><a href="Mypost"><i className="fa fa-retweet"></i> My post</a></li>
              <li><a href="Logout"><i className="fa fa-arrow-circle-o-right"></i> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-9 bg-white padding-2">
      <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
      <div className="col-md-12">
        
                                        <h3 className="mb-3 color-blue"><b>User Posts</b></h3>
                                        {photoblog}
                                      
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
export default Mypostpage