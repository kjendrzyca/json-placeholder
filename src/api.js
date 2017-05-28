const Endpoints = {
  POSTS: 'http://jsonplaceholder.typicode.com/posts'
}

const options = {
  method: 'get',
  accepts: 'application/json'
}

export const fetchPosts = () => fetch(Endpoints.POSTS, options).then(response => response.json())
export const fetchSinglePost = id => fetch(`${Endpoints.POSTS}/${id}`, options).then(response => response.json())
