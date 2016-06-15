import React from 'react';
import ReactDOM from 'react-dom';
import { routes } from './config/routes';

import './styles/material/material-design-iconic-font.min.css';
import './styles/material/material.js';
import './styles/material/material.min.css';
import './styles/styles.scss';

ReactDOM.render(
  routes,
  document.getElementById('app')
);
