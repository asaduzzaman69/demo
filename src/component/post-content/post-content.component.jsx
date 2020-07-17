import React from 'react'
import './post-content.styles.css'
const PostContent = ({postInfo:{ heading, para1,para2,para3}}) => {
return (
    <div>
     <div class="post-img">
    <img src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1594140182/people-1839564_1280_io13ha.jpg" alt="cute-baby" class="img-fluid" />
 </div>  
 <div class="post-progress">
    <div class="row">
            <div class="col-xl-7">
       <h1>{heading}</h1>
       <p>{para1}</p>
    </div>                           
    </div>                      
 </div>
 <div class="post-img">
    <div class="row">
       <div class="col-lg-6">
          <div class="post-img">
              <img src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1594141693/baby-1426651_1920_n8wmy2.jpg" alt="" class="img-fluid" />
          </div>
         
       </div>
       <div class="col-lg-6">
          <div class="post-img">
             <img src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1594141631/girl-3402351_1920_znmusz.jpg" alt="" class="img-fluid" />
          </div>
          
       </div>
    </div>
    <div class="para post-progress pass">
       <p>{para2}</p>
       <p>{para3}</p>
    </div>
 </div>
   
    </div>
    
)
}
export default PostContent;