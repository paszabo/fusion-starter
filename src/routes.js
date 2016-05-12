import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import FuelSavingsPage from './components/fuelSavings/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import CustomersPage from './components/customers/CustomersPage';
import ComponentGallery from './components/gallery/ComponentGallery';
import StyleGuide from './components/styleGuide/styleGuide';
import Dashboard from './components/dashboard/dashboard';
import HomePage from './components/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="gallery" component={ComponentGallery}/>
    <Route path="style-guide" component={StyleGuide}/>
    <Route path="dashboard" component={Dashboard}/>
    <Route path="fuelsavings" component={FuelSavingsPage}/>
    <Route path="customers" component={CustomersPage}/>
  </Route>
);
