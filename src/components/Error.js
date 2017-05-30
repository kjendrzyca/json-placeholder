import React from 'react'
import PropTypes from 'prop-types'
import {Alert} from 'react-bootstrap'

export default function ErrorComponent ({resolves}) {
  return <Alert bsStyle="danger">
    <h4>Oh snap! You got an error!</h4>
    <p>{resolves.errorDetails}</p>
  </Alert>
}

ErrorComponent.propTypes = {
  resolves: PropTypes.shape({
    errorDetails: PropTypes.string.isRequired
  }).isRequired
}
