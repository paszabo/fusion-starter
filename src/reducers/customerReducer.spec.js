import { expect } from 'chai';
import * as ActionTypes from '../actions/actionTypes';
import reducer from './loadingStatusReducer';

describe('Reducers::customerReducer', function() {
  it('should increment calls in progress', function() {
    const action = { type: ActionTypes.LOADING };
    const initialState = 1;
    const actual = reducer(initialState, action);
    expect(actual).to.equal(2);
  });

  it('should decrement calls in progress', function() {
    const action = { type: ActionTypes.LOADING_COMPLETE };
    const initialState = 2;
    const actual = reducer(initialState, action);
    expect(actual).to.equal(1);
  });
});
