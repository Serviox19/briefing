import React from 'react';
import WeatherComponent from '../components/Weather';
// import TweetsComponent from '../components/Tweets';
import NewsComponent from '../components/News';
import MapComponent from '../components/Map';

export const Wrapper = ({ location, zipCode }) => {
  return (
    <React.Fragment>
      <WeatherComponent
        location={location}
        zipCode={zipCode}
      />
      <MapComponent location={location} />
      <NewsComponent />
    </React.Fragment>
  )
}
