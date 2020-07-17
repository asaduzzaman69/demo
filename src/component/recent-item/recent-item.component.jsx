import React from 'react'
import './recent-item.styles.css'

const RecentItem = ({info:{heading}}) => {
return(
    <div class="cause-in">
    <div class="cont-hold">
       <img src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1594804397/image-9_jrjkjm.jpg"  class="img-fluid"alt="" />
       <h5>{heading}</h5>
    </div>
    <div class="title pro">
      <h5>
        $250k   <span>Raise of</span>   <span className='colors'>300$</span>
      </h5>
    </div>
    <div class="progress">
       <div class="progress-bar wow slideInLeft progre" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="1s" data-wow-delay=".5s">
          <span>75%</span>
       </div>
    </div>


 </div>
)}
export default RecentItem;