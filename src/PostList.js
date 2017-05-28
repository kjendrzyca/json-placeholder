import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import {UISref} from 'ui-router-react'
import 'react-table/react-table.css'

import './testUtils/localStorageMock'

class PostList extends Component {
  state = {
    pageSize: 20
  }

  componentDidMount () {
    const pageSize = localStorage.getItem('pageSize')
    if (!pageSize) {
      return
    }
    this.setState({pageSize})
  }

  setPageSize = (pageSize, pageIndex) => {
    this.setState({pageSize}, () => localStorage.setItem('pageSize', pageSize))
  }

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

    return <ReactTable
      columns={columns}
      data={posts}
      defaultPageSize={10}
      onPageSizeChange={this.setPageSize}
      pageSize={this.state.pageSize}
    />
  }
}

PostList.propTypes = {
  resolves: PropTypes.shape({
    posts: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
}

export default PostList
