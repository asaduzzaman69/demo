import React from 'react'
import './cause.styles.css'
import { render } from '@testing-library/react'
import CreateCard from '../createcard/createcard.component'
import CustomButton from '../../component/custom-button/custom-button.component'
import { withRouter } from 'react-router-dom'
import {selectPostDetail}  from '../../redux/post/post.selector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const Cause = ({history,post}) =>{
console.log(history)
return(
   
<section class="section blog blog--front_2">
    <div class="container">
      <div class="row margin-bottom">
        <div class="col-12">
          <div class="heading heading--primary heading--center"><span class="heading__pre-title">News</span>
            <h2 class="heading__title no-margin-bottom"><span>Helpo</span> <span>Blog</span></h2>
          </div>
        </div>
      </div>
      <div class="row offset-margin"> 
       {
          post.filter((post,indx) => indx < 3)
          .map(el => <CreateCard info={el}  cusTrue={true} /> )
      }
      </div>
      <CustomButton togo={() => history.push('/allcauses')}>Expend All</CustomButton>


     
    </div>

     
</section>

)}
 const mapStateToProps = createStructuredSelector({
   post:selectPostDetail

 })

export default withRouter(connect(mapStateToProps)(Cause));
