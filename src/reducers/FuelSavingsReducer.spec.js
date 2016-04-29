import React from 'react';
import { expect } from 'chai';
import * as ActionTypes from '../actions/actionTypes';
import reducer from './fuelSavingsReducer';
import dateHelper from '../businessLogic/dateHelper';
import initialState from './initialState';

describe('Reducers::FuelSavings', function() {

  const getInitialState = () => {
    return Object.assign({}, initialState.fuelSavings);
  };

  const getAppState = () => {
    return {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      }
    };
  };

  it('should set initial state by default', function() {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(reducer(undefined, action)).to.equal(expected); // Fails. Not deeply equal
  });

  it('should handle SAVE_FUEL_SAVINGS', function() {
    const action = { type: ActionTypes.SAVE_FUEL_SAVINGS, settings: getAppState() };
    const expected = Object.assign(getAppState(), {dateModified: dateHelper.getFormattedDateTime(new Date())});

    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it('should handle CALCULATE_FUEL_SAVINGS', function() {
    const action = { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: getAppState(), fieldName: 'newMpg', value: 30 };

    const expectedMpg = 30;
    const expectedSavings = { monthly: '$43.33', annual: '$519.96', threeYear: '$1,559.88' };

    expect(reducer(getAppState(), action).newMpg).to.equal(expectedMpg);
    expect(reducer(getAppState(), action).savings).to.deep.equal(expectedSavings);
  });
});
