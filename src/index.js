import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
// Yep, that's right. You can import SASS/CSS files too!
// Webpack will run the associated loader and plug this into the page.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
);
