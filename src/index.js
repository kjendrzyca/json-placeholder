import React from 'react'
import ReactDOM from 'react-dom'
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react'
import {Col, Grid, Nav, Navbar, NavItem, PageHeader, Row} from 'react-bootstrap'
import 'react-table/react-table.css'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import PostList from './components/PostList'
import Post from './components/Post'
import AlbumList from './components/AlbumList'
import Photos from './components/Photos'
import Users from './components/Users'
import ErrorComponent from './components/Error'
import {
  fetchPosts,
  fetchSinglePost,
  fetchCommentsForPost,
  fetchAlbums,
  fetchPhotosForAlbum,
  fetchUsers
} from './api'

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

const albumsState = {
  name: 'albums',
  url: '/albums',
  component: AlbumList,
  resolve: [{
    token: 'albums',
    resolveFn: () => fetchAlbums()
  }]
}

const photosState = {
  name: 'photos',
  url: '/photos?:albumId',
  component: Photos,
  resolve: [{
    token: 'photos',
    deps: ['$transition$'],
    resolveFn: transition => fetchPhotosForAlbum(transition.params().albumId)
  }]
}

const usersState = {
  name: 'users',
  url: '/users',
  component: Users,
  resolve: [{
    token: 'users',
    deps: ['$transition$'],
    resolveFn: transition => fetchUsers()
  }]
}

const errorState = {
  name: 'error',
  url: '/error?:errorDetails',
  component: ErrorComponent,
  resolve: [{
    token: 'errorDetails',
    deps: ['$transition$'],
    resolveFn: transition => decodeURIComponent(transition.params().errorDetails)
  }]
}

const config = router => {
  router.stateService.defaultErrorHandler(error => {
    router.stateService.go('error', {errorDetails: error.detail.message})
  })
}

ReactDOM.render(
  <UIRouter
    config={config}
    plugins={[pushStateLocationPlugin]}
    states={[postsState, singlePostState, albumsState, photosState, usersState, errorState]}
  >
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
                  <UISref to="posts"><span>Posts</span></UISref>
                </UISrefActive>
              </NavItem>
              <NavItem href="#">
                <UISrefActive class="active">
                  <UISref to="albums"><span>Albums</span></UISref>
                </UISrefActive>
              </NavItem>
              <NavItem href="#">
                <UISrefActive class="active">
                  <UISref to="users"><span>Users</span></UISref>
                </UISrefActive>
              </NavItem>
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
