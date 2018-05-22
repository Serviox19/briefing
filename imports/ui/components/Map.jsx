import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MapComponent extends Component {
  constructor(props) {
    super(props);

    let location = this.props.location;
    this.props.getPlaces({ location });

    this.state = {
      map: {}
    }
  }

  componentDidMount() {
    this.renderMap();
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

    this.setState({ map });

    const initialMarker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: long
      },
      map: map,
      title: 'Location'
    });
  }

  markPlace(place) {
    console.log(place);
    let lat = place.geometry.location.lat;
    let lng = place.geometry.location.lng;

    const newMarker = new google.maps.Marker({
      position: { lat, lng },
      map: this.state.map,
      title: `${place.name}`
    });

    newMarker.setMap(this.state.map);
    this.state.map.setCenter({ lat, lng });
  }

  renderPlaces(places) {
    console.log(places);
    const _this = this;
    return places.map((place, index) => {
      return (
        <div className="place"
          key={index}
          onClick={() => this.markPlace(place)}>
          <span className="name">{place.name}</span>&nbsp;&nbsp;
          <span className="address">{place.vicinity}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div id="map-component">
        <h2>Map Component</h2>
        <div className="wrapper">
          <div id="map" ref="map"></div>
          <div id="places-list">
            {this.renderPlaces(this.props.places)}
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
