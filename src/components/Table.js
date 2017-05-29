import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'

class Table extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageSize: 20
    }
  }

  componentDidMount () {
    const pageSize = localStorage.getItem(`pageSize-${this.props.resource}`)
    if (!pageSize) {
      return
    }
    this.setState({pageSize: Number(pageSize)})
  }

  setPageSize = (pageSize, pageIndex) => {
    this.setState({pageSize: Number(pageSize)}, () => localStorage.setItem(`pageSize-${this.props.resource}`, pageSize))
  }

  render () {
    return <ReactTable
      columns={this.props.columns}
      data={this.props.data}
      minRows={0}
      onPageSizeChange={this.setPageSize}
      pageSize={this.state.pageSize}
    />
  }
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  resource: PropTypes.string.isRequired
}

export default Table
