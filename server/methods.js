import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

let apiKey = 'AIzaSyCka2mQJlMIfdJ2EcMfPi8Zx39ggavCOwY';

let uri = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
let params = '&radius=5000&type=restaurant&key=';
params += apiKey;

Meteor.methods({
  getPlaces: function (location) {
    let coords = `${location.lat},${location.long}`;
    let request = uri+coords+params;
    console.log(`Request: ${request}`);
    this.unblock();
    return HTTP.get(request, {});
  }
});
