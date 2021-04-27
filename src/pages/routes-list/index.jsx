import React from 'react';
import { Link } from 'react-router-dom';
import routes from '~/routes';

export default function RoutesList(props) {
  return (
    <div>
      <h1>Routes List</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>
              <p>{route.path}</p>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}