const JSON_API = 'https://jsonplaceholder.typicode.com'

const Endpoints = {
  POSTS: `${JSON_API}/posts`,
  COMMENTS: `${JSON_API}/comments`,
  ALBUMS: `${JSON_API}/albums`,
  PHOTOS: `${JSON_API}/photos`,
  USERS: `${JSON_API}/users`
}

const fetchData = url => {
  return fetch(url, {
    method: 'get',
    accepts: 'application/json'
  }).then(response => {
    if (!response.ok) {
      throw response.statusText
    }
    return response
  }).then(response => {
    return response.json()
  }).catch(errorMessage => {
    throw new Error(`${errorMessage} - ${url}`)
  })
}

export const fetchPosts = () => fetchData(Endpoints.POSTS)
export const fetchSinglePost = id => fetchData(`${Endpoints.POSTS}/${id}`)
export const fetchCommentsForPost = id => fetchData(`${Endpoints.COMMENTS}?postId=${id}`)
export const fetchAlbums = () => fetchData(Endpoints.ALBUMS)
export const fetchPhotosForAlbum = id => fetchData(`${Endpoints.PHOTOS}?albumId=${id}`)
export const fetchUsers = () => fetchData(Endpoints.USERS)
