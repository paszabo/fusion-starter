import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../actions/actionTypes';
import objectAssign from 'object-assign';
import calculator from '../businessLogic/fuelSavingsCalculator';
import dateHelper from '../businessLogic/dateHelper';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
// This function is wired up in with the top level component in /containers.App.js
export default function fuelSavingsReducer(state = initialState.fuelSavings, action) {
  let newState;
  const calc = calculator();

  switch (action.type) {
  case SAVE_FUEL_SAVINGS:
    // in a real app we'd trigger an AJAX call here. For this example, just simulating a save by changing date modified.
    return objectAssign({}, state, {dateModified: dateHelper.getFormattedDateTime(new Date())});

  case CALCULATE_FUEL_SAVINGS:
    newState = objectAssign({}, state);
    newState[action.fieldName] = action.value;
    newState.necessaryDataIsProvidedToCalculateSavings = calc.necessaryDataIsProvidedToCalculateSavings(newState);
    newState.dateModified = dateHelper.getFormattedDateTime(new Date());

    if (newState.necessaryDataIsProvidedToCalculateSavings) {
      newState.savings = calc.calculateSavings(newState);
    }

    return newState;

  default:
    return state;
  }
}
