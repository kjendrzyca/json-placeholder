import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Comment.css'

class Comment extends Component {
  render() {
    const {body, email, name} = this.props.comment

    return (
      <article className="comment">
        <header>
          <h4>{name}</h4>
          <span className="user-info">Email: {email}</span>
        </header>
        <p>{body}</p>
      </article>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment
