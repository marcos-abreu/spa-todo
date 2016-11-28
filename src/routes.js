import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import Todo from './containers/todo';
import UserProfile from './containers/user-profile';

export default function getRoutes() {
  return (
    <Route component={App}>
      <Route path="/" component={Todo} />
      <Route path="user-profile" component={UserProfile} />
    </Route>
  );
}
