// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FuelSavingsApp from '../components/FuelSavingsApp';
import * as actions from '../actions/fuelSavingsActions';

class App extends React.Component {
  render() {
    return <FuelSavingsApp appState={this.props.appState} actions={this.props.actions} />;
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

// Tell Redux exactly what state slice we want from the global state
// Note that state.fuelSavingsAppState below is the name of
// the reducer function in /reducers/fuelSavings.js
function mapStateToProps(state) {
  return {
    appState: state.fuelSavingsAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
