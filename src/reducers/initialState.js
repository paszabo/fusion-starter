// This is the app's initial state. Note that reducers each handle a slice of this state.
// Composing all initial state here gives us a clear spot of reference that displays the shape
// of our entire store.
export default {
  customers: [],
  ajaxCallsInProgress: 0,
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  loadingIndicatorStatus: {
    percent: -1,
    intervalTime: 200
  },
  recentPosts: [
    {postid: 4294, date: '07/11/2016', time: '3:01 PM', category: 'Cars'},
    {postid: 918, date: '07/11/2016', time: '2:56 PM', category: 'Auto'},
    {postid: 513, date: '07/11/2016', time: '2:48 PM', category: 'Advice'},
    {postid: 3320, date: '07/11/2016', time: '2:31 PM', category: 'Trucks'},
    {postid: 917, date: '07/11/2016', time: '2:29 PM', category: 'Auto'},
    {postid: 512, date: '07/11/2016', time: '2:23 PM', category: 'Advice'},
    {postid: 4293, date: '07/11/2016', time: '2:15 PM', category: 'Cars'},
    {postid: 916, date: '07/11/2016', time: '2:13 PM', category: 'Auto'},
    {postid: 3319, date: '07/11/2016', time: '2:11 PM', category: 'Trucks'}
  ]
};
