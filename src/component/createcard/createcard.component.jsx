import React from 'react'
import './createcard.styles.css'
import { withRouter } from 'react-router-dom'

const CreateCard = ({info,history,match,cusTrue}) => {
  console.log(cusTrue)
    const {id,type,heading,para,date} = info;
    return (
    <div class="col-md-6 col-xl-4">
          <div class="blog-item blog-item--style-1">
            <div class="blog-item__img"><img class="img--bg" src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1593883717/ocean_xehqs6.jpg" alt="img"/><span class="blog-item__badge e-1" >{type}</span></div>
            <div class="blog-item__content">
<h6 class="blog-item__title">
  {
    cusTrue ? <span onClick={() => history.push(`/allCauses/${id}`)}>{heading}</span> : <span onClick={() => history.push(`/${match.path}/${id}`)}>{heading}</span>
  }
  
  
  <span onClick={() => history.push(`${match.path}/${id}`)}>{heading}</span></h6>
<p>{para}</p>
              <div class="blog-item__details"><span class="blog-item__date">{date}</span><span>
                </span></div>
            </div>
          </div>
        </div>
)}
export default withRouter(CreateCard);