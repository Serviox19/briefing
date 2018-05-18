import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MapComponent extends Component {
  constructor() {
    super();
  }

  renderMap() {
    let location = this.props.location;
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

  renderPlaces() {
    return this.props.places.map((place) => {
      return (
        <div key={place.id}>
          <span>{place.name}</span>
          <span>{place.vicinity}</span>
        </div>
      );
    });
  }

  componentDidMount() {
    let location = this.props.location;
    this.renderMap();
    this.props.getPlaces({ location });
  }

  render() {
    console.log(this.props);
    return (
      <div id="map-component">
        <h2>Map Component</h2>
        <div className="wrapper">
          <div id="map" ref="map"></div>
          <div id="places-list">
            {this.renderPlaces()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ places }) => {
  return { places };
}

export default connect(mapStateToProps, actions)(MapComponent);
