import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MapComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: {},
      places: []
    }
  }

  componentDidMount() {
    this.getPlaces();
    this.renderMap();
  }

  getPlaces() {
    let location = this.props.location;
    let lat = location.latitude.toFixed(7);
    let long = location.longitude.toFixed(7);

    let coords = {lat, long};

    Meteor.call('getPlaces', coords, (error, res) => {
      if (error) {
        console.log(error);
      } else {
        let data = res.data.results;
        console.log(data);
        this.setState({ places: data });
      }
    });
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
      animation: google.maps.Animation.DROP,
      map: this.state.map,
      position: { lat, lng },
      title: `${place.name}`
    });

    newMarker.setMap(this.state.map);
    this.state.map.setCenter({ lat, lng });
  }

  renderPlaces(places) {
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
            {this.renderPlaces(this.state.places)}
          </div>
        </div>
      </div>
    );
  }
}

export default MapComponent;
