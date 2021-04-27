import React from 'react';
import ReactDOM from 'react-dom';
import '~/styles/common.scss';
import Routers from './routesConfig';

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
  ,
  document.getElementById('root')
);
