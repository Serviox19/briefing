import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

//import Pages
import { App } from '../ui/layouts/App';
import Home from '../ui/pages/Home';

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: <Home />
    });
  }
});
