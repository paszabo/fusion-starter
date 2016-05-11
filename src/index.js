import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import {Router, browserHistory} from 'react-router';
import configureStore from './store/configureStore'; // eslint-disable-line import/default
// Yep, that's right. You can import SASS/CSS files too!
// Webpack will run the associated loader and plug this into the page.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const store = configureStore();

// Don't need React Router?
// Reference your top level component instead of <Router> below
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
