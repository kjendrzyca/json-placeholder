import React from 'react'
import ReactDOM from 'react-dom'
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react'
import {Col, Grid, Nav, Navbar, NavItem, PageHeader, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import PostList from './components/PostList'
import Post from './components/Post'
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
    <Grid>
      <Row>
        <Col xs={12}>
          <PageHeader>json-placeholder playground</PageHeader>
        </Col>
        <Col xs={12}>
          <Navbar>
            <Nav>
              <NavItem href="#">
                <UISrefActive class="active">
                  <UISref to="posts"><span>PostList</span></UISref>
                </UISrefActive>
              </NavItem>
              <NavItem href="#">Link</NavItem>
            </Nav>
          </Navbar>
        </Col>
        <Col xs={12}>
          <UIView />
        </Col>
      </Row>
    </Grid>
  </UIRouter>,
  document.getElementById('root')
)
