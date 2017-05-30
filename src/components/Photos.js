import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button, Col, Image, Modal, Row, Thumbnail} from 'react-bootstrap'
import './Photos.css'

class Photos extends Component {
  state = {
    selectedPhotoId: 0
  }

  showFullSizeImage = (selectedPhotoId) => {
    this.setState({selectedPhotoId: selectedPhotoId})
  }

  closeFullSizeImage = () => {
    this.setState({selectedPhotoId: 0})
  }

  render() {
    const {photos} = this.props.resolves
    const selectedPhoto = photos.find(photo => photo.id === this.state.selectedPhotoId)

    return (
      <Row>
        {photos.map(photo => (
          <Col key={photo.id} xs={6} md={2}>
            <Thumbnail
              onClick={() => this.showFullSizeImage(photo.id)}
              src={photo.thumbnailUrl}
            />
          </Col>
        ))}

        {selectedPhoto && <Modal show={true} onHide={this.closeFullSizeImage}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPhoto.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={selectedPhoto.url} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeFullSizeImage}>Close</Button>
          </Modal.Footer>
        </Modal>}
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
