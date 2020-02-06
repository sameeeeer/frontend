import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    render() {


        return (

            <div className="row post">
            <div className="col-md-12 color-white">
                <img src={"img/avataaar.png"} style={{marginTop:15}} className="img-circle" height="45px" width="45px" />
                <a href=""><strong>{this.props.post.user_id.fname  + " " + this.props.post.user_id.lname}</strong></a>
              
            </div>
            <div className="col-md-12">
                <p>{this.props.post.category}</p>
            </div>
            <div className="col-md-12">
                <p>{this.props.post.status}</p>
            </div>

            <div className="col-md-12">
                <img src={"http://localhost:3000/image/" + this.props.post.image} className="img-responsive post-img" width="100%" />
            </div>
            <div className="pull-right">
              <button type="button" className="btn btn-primary" style={{marginTop:15}} data-toggle="modal" data-target="#myModal"> <i className="fa fa-comment" ></i> Comment</button>
              <div id="myModal" class="modal fade" role="dialog">
              <div className="modal-dialog">
         <div className="modal-content">
          <div className="modal-header">
              <form >
                                      <div className="form-group" >
                                        <textarea className="form-control" type="text" placeholder="Comment *" name="comment"/>
                                    
                                      </div>
                                    </form>
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-primary"  >Comment</button>
                                  </div>
                                    </div>
                                    </div>
                                    </div>
                  </div>
            </div>
        </div>
                 )
    }
}
export default Post;