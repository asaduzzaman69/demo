import React from 'react'
import './post-preview.styles.css'
import PostContent from '../post-content/post-content.component'

const PostPreview = ({postInfo}) => (
    <div className="post-cont">
        <PostContent  postInfo={postInfo}/>

    </div>
)
export default PostPreview;