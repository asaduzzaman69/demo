import React from 'react'
import './allcauses.styles.css'
import AllCausesSer from '../../component/all-cause-serve/all-cause-serve.component'
import { Route } from 'react-router-dom'
import PostCatagory from '../../component/post-catagory/post-catagory.component'
const AllCauses = ({match}) => (
    <div>
        <Route exact path={`${match.path}`} component={AllCausesSer } />
        <Route  path={`${match.path}/:postID`} component={PostCatagory}/>
        
    </div>
)
export default AllCauses;