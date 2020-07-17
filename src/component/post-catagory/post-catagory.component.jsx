import React from 'react';
import './post-catagory.styles.css'
import RecentCause from '../recent-cause/recent-cause.component'
import Imgtags from '../img-tags/img-tags.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PostPreview from '../post-preview/post-preview.component'
import { postDetailsGet,selectPostDetail } from '../../redux/post/post.selector'
import  RecentCausePreview  from '../recent-cause-preview/recent-cause-preview.component'
import CreateCard from '../createcard/createcard.component'
import Header from '../header/header.component'

const PostCatagory = ({postInfo,post}) => {

return (
    <div>
            <Header isItTeam />

        <div className="causes-details">
        <div className="container">
            <div className="remove-gary"></div>
            <div className="row">
                <div className="col-xl-4">
                    <RecentCause />
                    <Imgtags />

                </div>
                <div className="col-xl-8">
                    <PostPreview postInfo={postInfo} />
                    
                </div>
            </div>
        </div>

    </div>
    <div>
   <RecentCausePreview />

    </div>
    <section class="section blog blog--front_2">
    <div class="container">
     
      <div class="row offset-margin"> 
       {
          post.filter((post,indx) => indx < 3)
          .map(el => <CreateCard info={el} cusTrue={true} /> )
      }
      </div>
      


     
    </div>
    </section>

    </div>
    

)
}
const mapStateToProps = (state,ownProps) => ({
    postInfo:postDetailsGet(ownProps.match.params.postID)(state),
    post:selectPostDetail(state)
})
export default connect(mapStateToProps)(PostCatagory);