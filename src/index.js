import React from 'react'
import ReactDOM from 'react-dom'
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react'
import PostList from './components/PostList'
import Post from './components/Post'
import './index.css'

import {fetchPosts, fetchSinglePost, fetchCommentsForPost} from './api'

const postsState = {
  name: 'posts',
  url: '/posts',
  component: PostList,
  resolve: [{
    token: 'posts',
    resolveFn: () => fetchPosts()
  }]
}

const singlePostState = {
  name: 'post',
  url: '/posts/:postId',
  component: Post,
  resolve: [{
    token: 'post',
    deps: ['$transition$'],
    resolveFn: transition => fetchSinglePost(transition.params().postId)
  }, {
    token: 'comments',
    deps: ['$transition$'],
    resolveFn: transition => fetchCommentsForPost(transition.params().postId)
  }]
}

ReactDOM.render(
  <UIRouter plugins={[pushStateLocationPlugin]} states={[postsState, singlePostState]}>
    <div>
      <UISrefActive class="active">
        <UISref to="posts"><a>PostList</a></UISref>
      </UISrefActive>

      <UIView />
    </div>
  </UIRouter>,
  document.getElementById('root')
)
