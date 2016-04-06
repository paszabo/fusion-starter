// This is the app's initial state. Note that reducers each handle a slice of this state.
// Composing all initial state here gives us a clear spot of reference that displays the shape
// of our entire store.
export default {
  customers: [],
  ajaxCallsInProgress: 0,
  fuelSavings: {
    newMpg: null,
    tradeMpg: null,
    newPpg: null,
    tradePpg: null,
    milesDriven: null,
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  }
};
