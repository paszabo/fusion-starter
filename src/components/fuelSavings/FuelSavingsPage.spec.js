import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FuelSavingsPage } from './FuelSavingsPage';
import FuelSavingsForm from './FuelSavingsForm';

describe('<FuelSavingsPage />', () => {
  it('should contain <FuelSavingsForm />', () => {
    // We have to mock these since we're testing the unconnected
    // component. (note the import above is for {FuelSavingsPage}
    // instead of the default export (which is connected).
    // This allows us to test the plain, unconnected component
    // without Redux.
    const actions = {
      saveFuelSavings: () => { },
      calculateFuelSavings: () => { }
    };
    const appState = { };
    const wrapper = shallow(<FuelSavingsPage actions={actions} appState={appState}/>);

    expect(wrapper.find(FuelSavingsForm)).to.be.length(1);
  });
});
