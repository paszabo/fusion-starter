import fuelSavings from './fuelSavingsReducer';
import {saveFuelSavings} from '../actions/fuelSavingsActions';
import chai from 'chai';

chai.should();


describe('Fuel Savings Reducer', () => {
  describe('Save Fuel Savings', () => {
    it('Updates dateModified', () => {
      //arrange
      const stateBefore = {
        dateModified: 'dummy value'
      };

      //act
      const stateAfter = fuelSavings(stateBefore, saveFuelSavings(stateBefore));

      //assert
      stateBefore.should.not.equal(stateAfter);
    });
  });
});
