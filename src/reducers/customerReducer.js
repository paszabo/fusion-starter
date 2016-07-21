import {RECEIVE_CUSTOMERS} from '../actions/actionTypes';
import initialState from './initialState';
import objectAssign from 'object-assign';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
// This function is wired up in with the top level component in /containers.App.js
export default function customerReducer(state = initialState.customers, action) {
  switch (action.type) {
  case RECEIVE_CUSTOMERS:
    return action.customers;

  default:
    return state;
  }
}
