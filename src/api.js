const Endpoints = {
  POSTS: 'http://jsonplaceholder.typicode.com/posts',
  COMMENTS: 'http://jsonplaceholder.typicode.com/comments',
  ALBUMS: 'http://jsonplaceholder.typicode.com/albums',
  PHOTOS: 'http://jsonplaceholder.typicode.com/photos'
}

const options = {
  method: 'get',
  accepts: 'application/json'
}

export const fetchPosts = () => fetch(Endpoints.POSTS, options).then(response => response.json())
export const fetchSinglePost = id => fetch(`${Endpoints.POSTS}/${id}`, options).then(response => response.json())
export const fetchCommentsForPost = id => fetch(`${Endpoints.COMMENTS}?postId=${id}`, options).then(response => response.json())
export const fetchAlbums = () => fetch(Endpoints.ALBUMS, options).then(response => response.json())
export const fetchPhotosForAlbum = id => fetch(`${Endpoints.PHOTOS}?albumId=${id}`, options).then(response => response.json())
