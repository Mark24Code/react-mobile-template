import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Loading from '~/comps/loading';
import routes from '~/routes';

export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}