import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {UISref} from 'ui-router-react'

import Commment from './Comment'

class Post extends Component {
  render() {
    const {body, id, title, userId} = this.props.resolves.post
    const {comments} = this.props.resolves

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
          <div>
            Comments: <br />
            {comments.map(comment => <Commment comment={comment} key={comment.id} />)}
          </div>
        </footer>
      </article>
    )
  }
}

Post.propTypes = {
  resolves: PropTypes.shape({
    comments: PropTypes.array.isRequired,
    post: PropTypes.object.isRequired
  }).isRequired
}

export default Post
