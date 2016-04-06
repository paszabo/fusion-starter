import * as types from './actionTypes';

export function loading() {
  return { type: types.LOADING };
}

export function loadingComplete(customers) {
  return { type: types.LOADING_COMPLETE };
}
