import initialState from './initialState';

export default function stateReducer(states = initialState.states, action) {
  switch (action.type) {
    default:
      return states;
  }
}
