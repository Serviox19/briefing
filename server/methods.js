import { Meteor } from 'meteor/meteor';

Meteor.methods({
  getPlaces: function () {
    this.unblock();
    return HTTP.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.8469865,-74.1637401&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyCka2mQJlMIfdJ2EcMfPi8Zx39ggavCOwY', {});
  }
});
