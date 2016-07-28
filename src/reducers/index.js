import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import customers from './customerReducer';
import ajaxCallsInProgress from './loadingStatusReducer';
import loadingIndicatorStatus from './loadingIndicatorReducer';
import recentPosts from './recentPostsReducer';

// Note that I chose a shorter name above when importing reducers.
// This keeps the calls to these reducers in our container components
// shorter and more natural. Using ES6 short-hand properties below
// (Don't have to repeat myself on the right-hand side when the prop
// and value match)
const rootReducer = combineReducers({
  fuelSavings,
  customers,
  ajaxCallsInProgress,
  loadingIndicatorStatus,
  recentPosts
});

export default rootReducer;
