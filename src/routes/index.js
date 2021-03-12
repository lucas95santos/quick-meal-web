import React from 'react';
import { Switch, Route } from 'react-router-dom';
// screens
import { Catalog, Orders, Profile, NotFound } from '../screens';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Catalog} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
