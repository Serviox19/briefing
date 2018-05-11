import React from 'react';
import WeatherComponent from '../components/Weather';
import TweetsComponent from '../components/TopTweets';

export const Wrapper = ({ location, zipCode }) => {
  return (
    <React.Fragment>
      <WeatherComponent
        location={location}
        zipCode={zipCode}
      />
      <TweetsComponent
      />
    </React.Fragment>
  )
}
