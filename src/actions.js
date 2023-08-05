import axios from 'axios';

export const GET_PAGES = 'result/GET_PAGES';
export const GET_POSTS = 'result/GET_POSTS';
export const GET_POST_IMAGE = 'result/GET_POST_IMAGE';

export const getData = () => {
  return dispatch => {
    axios.get('https://wp.paulabramwell.com.au/wp-json/wp/v2/pages?orderby=menu_order&order=asc&per_page=20')
      .then(function(response) {
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

        return dispatch({
          type: GET_PAGES,
          value: combined
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export const getPosts = () => {
  return dispatch => {
    axios.get('https://wp.paulabramwell.com.au/wp-json/wp/v2/posts?per_page=20')
      .then(function(response) {
        const posts = response.data.map((m) => ({
          name: m.title.rendered,
          slug: m.slug,
          link: m.link,
          content: m.content.rendered,
          id: m.id,
          date: m.date,
          excerpt: m.excerpt.rendered,
          imageEndpoint: m._links["wp:attachment"] && m._links["wp:attachment"].length > 0
            ? m._links["wp:attachment"][0].href : ""
        }));

        return dispatch({
          type: GET_POSTS,
          value: posts
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export const getPostImage = (postId, postEndpoint) => {
  return dispatch => {
    axios.get(postEndpoint)
      .then(function(response) {
        const imagesMeta = response.data.map((m) => ({
          imageUrl: m.source_url
        }));

        return dispatch({
          type: GET_POST_IMAGE,
          value: imagesMeta && imagesMeta.length > 0
            ? {
              postId, imageUrl: imagesMeta[0].imageUrl
            }
            : {
              postId, imageUrl: ""
            }
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
