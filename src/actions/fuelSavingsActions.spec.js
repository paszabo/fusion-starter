import chai, { expect } from 'chai';
import * as ActionCreators from './fuelSavingsActions';
import * as ActionTypes from './actionTypes';
import MockDate from 'mockdate';
import dateHelper from '../utils/dateHelper';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('Actions', function() {
  let dateModified;
  before(() => {
    MockDate.set(new Date());
    dateModified = dateHelper.getFormattedDateTime();
  });

  after(() => MockDate.reset());

  const appState = {
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

  it('should create an action to save fuel savings', function() {
    const dispatch = sinon.spy();
    const expected = {
      type: ActionTypes.SAVE_FUEL_SAVINGS,
      dateModified,
      settings: appState
    };

    // We expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.saveFuelSavings(appState))).to.equal('function');

    // Then we simulate calling it with dispatch as the store would do
    ActionCreators.saveFuelSavings(appState)(dispatch);

    // Finally assert that the dispatch was called with our expected action
    expect(dispatch).to.have.been.calledWith(expected);
  });

  it('should create an action to calculate fuel savings', function() {
    const fieldName = 'newMpg';
    const value = 100;

    const actual = ActionCreators.calculateFuelSavings(appState, fieldName, value);

    const expected = {
      type: ActionTypes.CALCULATE_FUEL_SAVINGS,
      dateModified,
      settings: appState,
      fieldName: fieldName,
      value: value
    };

    expect(actual).to.deep.equal(expected);
  });
});
