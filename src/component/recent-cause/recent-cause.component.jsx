import React from 'react'
import './recent-cause.styles.css'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectPostDetail} from '../../redux/post/post.selector'
import RecentItem from '../recent-item/recent-item.component'

const RecentCause =({post}) => (
    <div className="recent-causes">
        <div className="recent-causes-cont">
            {
                post.filter((post,indx) => indx < 3)
                .map(el => <RecentItem info={el}/> )

            }
        </div>
    </div>

)
const mapStateToProps = createStructuredSelector({
    post:selectPostDetail
})
export default connect(mapStateToProps)(RecentCause);  