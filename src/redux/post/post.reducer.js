import post from './post'
const INITIAL_STATE = {
    postDetails:post

}
const postReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        default:
            return state

    }
}

export default postReducer;