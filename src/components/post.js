import React, { Component } from 'react';

class Post extends Component {
    render() {


        return (

            <div className="row post">
            <div className="col-md-12 color-white">
                <img src={"img/avataaar.png"} style={{marginTop:15}}className="img-circle" height="45px" width="45px" />
                <a href=""><strong>{this.props.post.user_id.fname  + " " + this.props.post.user_id.lname}</strong></a>
            </div>
            <div className="col-md-12">
                <p>{this.props.post.status}</p>
            </div>
            <div className="col-md-12">
                <p>{this.props.post.category}</p>
            </div>
            <div className="col-md-12">
                <img src={"http://localhost:3000/image/" + this.props.post.image} className="img-responsive post-img" width="100%" />
            </div>
        </div>
                 )
    }
}
export default Post;