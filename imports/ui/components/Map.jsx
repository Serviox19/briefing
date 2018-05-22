import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MapComponent extends Component {
  constructor(props) {
    super(props);

    let location = this.props.location;
    this.props.getPlaces({ location });
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

    const marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: long
      },
      map: map,
      title: 'Location'
    });
  }

  renderPlaces(places) {
    console.log(places);
    return places.map((place, index) => {
      return (
        <div className="place"
          key={index}
          onClick={() => console.log(alert(place.name))}>
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
