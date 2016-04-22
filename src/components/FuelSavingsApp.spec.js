import React from 'react';
import {expect} from 'chai';
import { mount, shallow } from 'enzyme';
import FuelSavingsApp from './FuelSavingsApp';
import initialState from '../reducers/initialState';

describe('Fuel Savings App', () => {
  // it('should hide results when they cannot be calculated', () => {
  //   const fuelSavings = { necessaryDataIsProvidedToCalculateSavings: false };
  //   const app = <FuelSavingsApp fuelSavings={fuelSavings}/>;
  //   const resultsExist = mount(app).find('#fuel-savings-results').length == 1;
  //   expect(resultsExist).to.equal(false);
  // });

  // it('should display results when they can be calculated', () => {
  //   //arrange
  //   const fuelSavings = Object.assign({}, initialState.fuelSavings);
  //   fuelSavings.tradeMpg = 20;
  //   fuelSavings.newMpg = 20;
  //   fuelSavings.tradePpg = 1.20;
  //   fuelSavings.newPpg = 1.20;
  //   fuelSavings.necessaryDataIsProvidedToCalculateSavings = true;
  //   fuelSavings.milesDriven = 20;
  //   fuelSavings.milesDrivenTimeframe = 'week';
  //
  //   const app = <FuelSavingsApp fuelSavings={fuelSavings}/>;
  //   const resultsExist = mount(app).find('#fuel-savings-results').length == 1;
  //   expect(resultsExist).to.equal(true);
  // });
});
