import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {UISref} from 'ui-router-react'
import 'react-table/react-table.css'

import Table from './Table'

class AlbumList extends Component {
  render() {
    const {albums} = this.props.resolves

    const columns = [{
      Header: 'Id',
      accessor: 'id',
      maxWidth: 100
    }, {
      Header: 'UserId',
      accessor: 'userId',
      maxWidth: 100
    }, {
      Header: 'Title',
      accessor: 'title',
    }, {
      Header: 'Actions',
      accessor: 'id',
      Cell: props => <UISref to="photos" params={{albumId: props.value}}>
        <a>Browse photos</a>
      </UISref>,
      maxWidth: 100
    }]

    return (
      <Table
        columns={columns}
        data={albums}
        resource='albums'
      />
    )
  }
}

AlbumList.propTypes = {
  resolves: PropTypes.shape({
    albums: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
}

export default AlbumList
