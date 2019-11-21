import { combineReducers } from 'redux'
import axios from 'axios'

export const GET_DATA = 'result/GET_DATA'

const initialState = {
  data: [{}]
}

export const getData = () => {
  return dispatch => {
    axios.get('https://wp.paulabramwell.com.au/wp-json/wp/v2/pages?orderby=menu_order&order=asc')
      .then(function (response) {
        const unstructured = response.data.map((m) => ({
          name: m.title.rendered,
          slug: m.slug,
          link: m.link,
          content: m.content.rendered,
          id: m.id,
          parent: m.parent,
          children: [{}]
        }));
        const parentData = unstructured.filter((u) => u.parent === 0); 
        const childData = unstructured.filter((u) => u.parent > 0); 
        
        const combined = parentData.map((p) => {
          const children = childData.filter(c => c.parent === p.id);
          
          return {
            ...p,
            children: children
          }
        });
        console.log(combined)

        return dispatch({
          type: GET_DATA,
          value: combined
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
