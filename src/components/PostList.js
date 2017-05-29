import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {UISref} from 'ui-router-react'

import Table from './Table'

class PostList extends Component {
  render() {
    const {posts} = this.props.resolves

    const columns = [{
      Header: 'Id',
      accessor: 'id'
    }, {
      Header: 'UserId',
      accessor: 'userId'
    }, {
      Header: 'Title',
      accessor: 'title',
    }, {
      Header: 'Body',
      accessor: 'body'
    }, {
      Header: 'Actions',
      accessor: 'id',
      Cell: props => <UISref to="post" params={{postId: props.value}}>
        <a>Open</a>
      </UISref>
    }]

    return <Table
      columns={columns}
      data={posts}
      resource='posts'
    />
  }
}

PostList.propTypes = {
  resolves: PropTypes.shape({
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
}

export default PostList
