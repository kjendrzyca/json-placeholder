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
import {fetchPosts, fetchSinglePost, fetchCommentsForPost, fetchAlbums, fetchPhotosForAlbum} from './api'

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

ReactDOM.render(
  <UIRouter plugins={[pushStateLocationPlugin]} states={[postsState, singlePostState, albumsState, photosState]}>
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
