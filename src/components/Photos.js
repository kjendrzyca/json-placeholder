import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Col, Grid, Row, Thumbnail} from 'react-bootstrap'

class Photos extends Component {
  render() {
    const {photos} = this.props.resolves

    return (
      <Row>
        {photos.map(photo => (
          <Col key={photo.id} xs={6} md={2}>
            <Thumbnail src={photo.thumbnailUrl} />
          </Col>
        ))}
      </Row>
    )
  }
}

Photos.propTypes = {
  resolves: PropTypes.shape({
    photos: PropTypes.array.isRequired
  }).isRequired
}

export default Photos
