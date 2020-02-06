import React from 'react'
import Post from './post'
import Navi from '../components/Navi';

class Newsfeedpage extends React.Component{
       
    render(){ 
      const photoblog = this.props.post.map(post => {
        return <Post post={post} />
      })
        return(
            <div>
                
                <div className="content-wrapper" style={{marginleft: "0 px"}}>

<section id="candidates" className="content-header">
  <div className="container">
    <div className="row">
     <Navi />
      <div className="col-md-9 bg-white padding-2">
      <form action="#" method="post" enctype="multipart/form-data" className="p-5 bg-white">
        <div className="box box-primary">
        <div class="col-md-7 gedf-main">
                    {photoblog}
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
export default Newsfeedpage