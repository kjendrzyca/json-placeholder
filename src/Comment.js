import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Post extends Component {
  render() {
    const {body, email, name} = this.props.comment

    return (
      <article>
        <header>
          <h1>{name}</h1>
          <p>Email: {email}</p>
        </header>
        <p>{body}</p>
      </article>
    )
  }
}

Post.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Post
