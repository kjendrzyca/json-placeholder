import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {UISref} from 'ui-router-react'

import {Col, Grid, Nav, Navbar, NavItem, ListGroup, ListGroupItem, PageHeader, Panel, Row} from 'react-bootstrap'

import Commment from './Comment'
import './Post.css'

class Post extends Component {
  render() {
    const {body, id, title, userId} = this.props.resolves.post
    const {comments} = this.props.resolves

    return (
      <article className="post">
        <header>
          <h1>{id}. {title}</h1>
          <span className="user-info">User id: {userId}</span>
        </header>
        <div className="content">
          <p>{body}</p>
        </div>
        <footer>
          <UISref to="posts">
            <a>Go back</a>
          </UISref>
          <Row className="comments">
            <Col xs={12} md={10} mdOffset={1}>
              <div className="comments-heading">Comments</div>
              {comments.map(comment => <Commment comment={comment} key={comment.id} />)}
            </Col>
          </Row>
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
