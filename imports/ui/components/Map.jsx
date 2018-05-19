import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MapComponent extends Component {
  constructor(props) {
    super(props);
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
    return this.props.places.map((place, index) => {
      return (
        <div key={index}>
          <span>{place.name}</span>&nbsp;&nbsp;
          <span>{place.vicinity}</span>
        </div>
      );
    });
  }

  componentDidMount() {
    let location = this.props.location;
    this.props.getPlaces({ location });
    this.renderMap();
  }

  render() {
    console.log(this.props.places);
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
