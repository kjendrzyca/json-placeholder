import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {UISref} from 'ui-router-react'

class Post extends Component {
  render() {
    const {body, id, title, userId} = this.props.resolves.post

    return (
      <article>
        <header>
          <h1>{id} {title}</h1>
          <p>User id: {userId}</p>
        </header>
        <p>{body}</p>
        <footer>
          <UISref to="posts">
            <a>Go back</a>
          </UISref>
        </footer>
      </article>
    )
  }
}

Post.propTypes = {
  resolves: PropTypes.shape({
    post: PropTypes.object.isRequired
  }).isRequired
}

export default Post
