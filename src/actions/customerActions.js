import * as types from './actionTypes';
import {loading, loadingComplete} from './loadingStatusActions';
import {getCustomers} from '../api/api';

// This is called from fetchCustomers when the ajax call resolves.
export function receiveCustomers(customers) {
  return { type: types.RECEIVE_CUSTOMERS, customers };
}

// This is a thunk action creator
// Since this needs to make an async call (an ajax call to the server)
// we need to return a function instead of an action object.
// redux-thunk helps make this happen (wired up in /store/configureStore.js).
// More info on this pattern: http://redux.js.org/docs/advanced/AsyncActions.html
export function fetchCustomers() {
  // Thunk middleware (redux-thunk) knows how to handle functions.
  // It passes the dispatch methods as an argument to the function.
  // This makes it able to dispatch actions itself.
  return function(dispatch) {
    // call the loading action creator below so the UI is updated to reflect the AJAX call in progress.
    dispatch(loading());
    return getCustomers().then(function(response) {
      // now that we've gotten the ajax response back, dispatch it.
      const customers = response.data.Data;
      dispatch(receiveCustomers(customers));
      dispatch(loadingComplete());
    });
  };
}
