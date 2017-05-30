import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Badge, Col, Glyphicon, Row} from 'react-bootstrap'
import GoogleMap from 'google-map-react'
import './Users.css'

const Marker = ({address}) => <div>
  <Badge>
    <p>{address.street}</p>
    <p>{address.suite}</p>
    <p>{address.city}</p>
    <p>{address.zipcode}</p>
  </Badge>
</div>

class PostList extends Component {
  render() {
    const {users} = this.props.resolves

    return <div>
      {users.map(user => {
        const {lat, lng} = user.address.geo
        const geo = {
          lat: Number(lat),
          lng: Number(lng)
        }

        const {company} = user

        return (
          <Row key={user.id}>
            <Col xs={12} md={6}>
              <div className="user-data-wrapper">
                <div>
                  <div><Glyphicon glyph="user" /> {user.name}</div>
                  <div className="user-info">{user.username} / {user.email}</div>
                  <div className="user-info">Phone: {user.phone} / Website: {user.website}</div>
                </div>
                <hr />
                <div>
                  <div><Glyphicon glyph="briefcase" /> Company: {company.name} | {company.catchPhrase}</div>
                  <div className="user-info">{company.bs}</div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className='google-map'>
                <GoogleMap
                  center={geo}
                  defaultZoom={0}
                >
                  <Marker
                    lat={geo.lat}
                    lng={geo.lng}
                    address={user.address}
                  />
                </GoogleMap>
              </div>
            </Col>
          </Row>
        )
      })}
    </div>
  }
}

PostList.propTypes = {
  resolves: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
}

export default PostList
