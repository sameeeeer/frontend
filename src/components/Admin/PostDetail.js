import axios from 'axios'
import React from 'react'
import AdminNavi from '../AdminNavi/AdminNavi'
import Postdetailss from './postdetailss'

class PostDetail extends React.Component{
  
  render(){
  const photoblog = this.props.post.map(post => {
    return <Postdetailss post={post} />
  })
    return(
        <div>
            
            <div className="content-wrapper" style={{marginleft: "0 px"}}>

<section id="candidates" className="content-header">
<div className="container">
  <div className="row">
<AdminNavi />

                    {photoblog}
                  </div>
   

</div>
</section>
</div>
</div>
         
         )
        }
        
 
 }
 export default PostDetail