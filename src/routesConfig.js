import React, { Suspense } from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import history from '~/utils/history';
import Loading from '~/comps/loading';
import routes from '~/routes';

export default function RouterConfig() {
  return (
    <Router history={history}>
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
    </Router>
  );
}
