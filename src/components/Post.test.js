import React from 'react'
import ReactDOM from 'react-dom'
import {UIRouter, pushStateLocationPlugin} from 'ui-router-react'
import Post from './Post'



it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UIRouter plugins={[pushStateLocationPlugin]}>
    <Post
      resolves={{
        comments: [],
        post: {}
      }}
    />
  </UIRouter>, div)
})
