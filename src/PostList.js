import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

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
    }]

    return <ReactTable
      data={posts}
      columns={columns}
    />
  }
}

PostList.propTypes = {
  resolves: PropTypes.shape({
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
}

export default PostList
