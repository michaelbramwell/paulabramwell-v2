import { combineReducers } from 'redux'
import axios from 'axios'

export const GET_DATA = 'result/GET_DATA'

const initialState = {
  data: [{}]
}

export const getData = () => {
  return dispatch => {
    axios.get('https://wp.paulabramwell.com.au/wp-json/wp/v2/pages?order=asc')
      .then(function (response) {
        return dispatch({
          type: GET_DATA,
          value: response.data.map((m) => ({
            name: m.title.rendered,
            slug: m.slug,
            content: m.content.rendered,
            id: m.id
          }))
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

const Result = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.value
      }

    default:
      return state
  }
}

export default combineReducers({
  Result
})
