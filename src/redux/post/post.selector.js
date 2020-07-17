import { createSelector } from 'reselect'

const selectPost = state => state.post;
const  COLLECTION_ID_MAP = {
    purnota:1
}

export const selectPostDetail = createSelector(
    [selectPost],
    post => post.postDetails

)
export const postDetailsGet = collectionParamId => createSelector(
    [selectPostDetail],
    posts => posts.find(post => post.id === collectionParamId)

)
//export const selectCollection = collectionParamId => createSelector(
//
//    [selectShopCollection],
//    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionParamId])
//)