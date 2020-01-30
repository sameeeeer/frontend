import React from 'react'




class Indexpage extends React.Component{
   
       render(){

        return(
            <div>

<div className="wrapper">

<div className="content-wrapper">
 <section className="content-header bg-main">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center index-head">
            <h1>Find<strong> the stories</strong> of your choice</h1>
          </div>
        </div>
      </div>
    </section>
	
	
	
	

    <section className="content-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12 latest-job margin-bottom-20">
            <h1 className="text-center">Popular Stories</h1>            

           
         

          </div>
        </div>
      </div>
    </section>
			
	
	
	  
 </div>
 </div>
 <section className="content-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12 latest-job margin-bottom-20">
            <h1 className="text-center">Latest Blogs</h1>            
          
            <div className="attachment-block clearfix">
              <div className="attachment-pushed">
                <h4 className="attachment-heading"><a href="#"></a> <span className="attachment-heading pull-right"></span></h4>
                <div className="attachment-text">
                    <div><strong></strong></div>
                </div>
              </div>
            </div>
        

          </div>
        </div>
      </div>
    </section>
 <div className="container" id="contact">
        <h2 className="font-weight-light text-black text-center">Contact Us</h2>
        <div className="row">
            <div className="col-md-7 mb-5">


                <form id="form1" action="#" className="p-5 bg-white">


                    <div className="row form-group">
                        <div className="alert-info" id="check"></div>
                        <div className="col-md-6 mb-3 mb-md-0">
                            <label className="text-black" for="fname">First Name</label>
                            <input type="text" name="fname" id="fname" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="text-black" for="lname">Last Name</label>
                            <input type="text" name="lname" id="lname" className="form-control" />
                        </div>
                    </div>

                    <div className="row form-group">

                        <div className="col-md-12">
                            <label className="text-black" for="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" />
                        </div>
                    </div>

                    <div className="row form-group">

                        <div className="col-md-12">
                            <label className="text-black" for="subject">Subject</label>
                            <input type="subject" name="subject" id="subject" className="form-control" />
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col-md-12">
                            <label className="text-black" for="message">Message</label>
                            <textarea name="message" name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col-md-12">
                            <input type="submit" value="Send Message" className="btn btn-primary py-2 px-4 text-white" />
                        </div>
                    </div>


                </form>
            </div>
            <div className="col-md-5">

                <div className="p-4 mb-3 bg-white">
                    <p className="mb-0 font-weight-bold">Address</p>
                    <p className="mb-4">shikhar galli,House number 104 ,maitidevi, kathmandu, Nepal</p>

                    <p className="mb-0 font-weight-bold">Phone</p>
                    <p className="mb-4"><a href="#">+977 9860049993</a></p>

                    <p className="mb-0 font-weight-bold">Email Address</p>
                    <p className="mb-0"><a href="#">info@blogforyou.com</a></p>

                </div>

                <div className="p-4 mb-3 bg-white">
                    <h3 className="h5 text-black mb-3">More Info</h3>
                    <p>Be free to post whatever you like. let's show the world what you can do.</p>
                    <p><a href="signup" className="btn btn-primary px-4 py-2 text-white">Signup Now</a></p>
                </div>

            </div>
        </div>
    </div>
 
           
            </div>
           
        )
       }
       

}
export default Indexpage
