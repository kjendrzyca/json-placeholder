import React from 'react'
import ReactDOM from 'react-dom'
import PostList from './PostList'

import '../testUtils/localStorageMock'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PostList
    resolves={{posts: []}}
  />, div)
})
