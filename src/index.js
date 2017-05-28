import React from 'react'
import ReactDOM from 'react-dom'
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react'
import PostList from './PostList'
import './index.css'

import {fetchPosts} from './api'

var postsState = {
  name: 'posts',
  url: '/posts',
  component: PostList,
  resolve: [{
    token: 'posts',
    resolveFn: () => fetchPosts()
  }]
}

var aboutState = {
  name: 'about',
  url: '/about',
  component: () => <h3>Its the UI-Router hello world app!</h3>
}

ReactDOM.render(
  <UIRouter plugins={[pushStateLocationPlugin]} states={[postsState, aboutState]}>
    <div>
      <UISrefActive class="active">
        <UISref to="posts"><a>PostList</a></UISref>
      </UISrefActive>
      <UISrefActive class="active">
        <UISref to="about"><a>About</a></UISref>
      </UISrefActive>

      <UIView/>
    </div>
  </UIRouter>,
  document.getElementById('root')
)
