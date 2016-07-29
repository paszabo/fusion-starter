import * as ActionTypes from '../actions/actionTypes';
import { createStore } from 'redux';
import { expect } from 'chai';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

describe('Store', function() {
  it('should display results when necessary data is provided', function() {
    const store = createStore(rootReducer, initialState);
  });
});
