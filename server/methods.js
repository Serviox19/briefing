import { Meteor } from 'meteor/meteor';

Meteor.methods({
  getPlaces: function (uri) {
    console.log('uri: ' + uri);
    this.unblock();
    return HTTP.get(uri, {});
  }
});
