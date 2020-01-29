import { combineReducers } from 'redux';
import { GET_POSTS, GET_PAGES, GET_POST_IMAGE } from './actions';

const initialState = {
  data: [{}],
  posts: [{}]
}

const Result = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGES:
      return {
        ...state,
        data: action.value
      }

    case GET_POSTS:
      return {
        ...state,
        posts: action.value
      }

    case GET_POST_IMAGE:
      return {
        ...state,
        postImages: state.postImages 
          ? {...state.postImages, ...action.value} 
          : action.value
      }

    default:
      return state
  }
}

export default combineReducers({
  Result
})
