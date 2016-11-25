import React from 'react';
import { Route } from 'react-router';

import Todo from './components/todo';
import UserProfile from './components/user-profile';

export default function getRoutes() {
  return (
    <Route>
      <Route path="/" component={Todo} />
      <Route path="user-profile" component={UserProfile} />
    </Route>
  );
}
