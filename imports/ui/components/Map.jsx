import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MapComponent extends Component {
  constructor() {
    super();

    let location = this.props.location;
    this.props.getPlaces({ location });
  }

  componentDidMount() {
    let lat = this.props.location.latitude;
    let long = this.props.location.longitude;

    const map = new google.maps.Map(this.refs.map, {
      center: {
        lat: lat,
        lng: long
      },
      zoom: 15
    });

    const marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: long
      },
      map: map,
      title: 'Location'
    });
  }

  render() {
    return (
      <div id="map-component">
        <h2>Map Component</h2>
        <div className="wrapper">
          <div id="map" ref="map"></div>
          <div id="places-list"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ places }) => {
  return { places };
}

export default connect(mapStateToProps, actions)(MapComponent);
