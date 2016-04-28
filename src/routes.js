import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import FuelSavingsApp from './components/fuelSavings/FuelSavingsApp';
import CustomersApp from './components/customers/CustomersApp';
import ComponentGallery from './components/gallery/ComponentGallery';
import HomePage from './components/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="components" component={ComponentGallery}/>
    <Route path="fuelsavings" component={FuelSavingsApp}/>
    <Route path="customers" component={CustomersApp}/>
  </Route>
);
