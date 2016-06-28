import * as types from './actionTypes';
import {loading, loadingComplete} from './loadingStatusActions';
import {getUsers, searchCustomers, login} from '../api/api';

export function receiveLogin(token) {
  return { type: types.RECEIVE_LOGIN, token };
}

// This is called from fetchCustomers when the ajax call resolves.
export function receiveCustomers(customers) {
  return { type: types.RECEIVE_CUSTOMERS, customers };
}

export function submitLogin() {
  return function(dispatch) {
    dispatch(loading());
    return login().then(function(response) {
      // now that we've gotten the ajax response back, dispatch it.
      const token = response.data.Data;
      dispatch(receiveLogin(token));
      dispatch(loadingComplete());
    });
  };
}

export function submitSearchCustomers(search) {
  return function(dispatch) {
    dispatch(loading());
    return searchCustomers(search).then(function(response) {
      const customers = response.data.Data;
      dispatch(receiveCustomers(customers));
      dispatch(loadingComplete());
    });
  };
}
