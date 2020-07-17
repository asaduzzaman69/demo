import React from 'react'
import './all-cause-serve.styles.css'
import CreateCard from '../../component/createcard/createcard.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectPostDetail} from '../../redux/post/post.selector'
import CustomButton from '../custom-button/custom-button.component'
import Header from '../../component/header/header.component'


const AllCausesSer = ({post,isTrues}) => {


return (
  <div>
    <Header isItTeam />

    <section class={`${isTrues ? 'fixing' : ''} section blog blog--front_2 `}>
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
          post.map(el => <CreateCard info={el}  /> )
      }
      </div>
      

     
    </div>

     
</section>
    
  </div>
  

)}
const mapStateToProps = createStructuredSelector({
  post:selectPostDetail

})
export default connect(mapStateToProps)(AllCausesSer);

