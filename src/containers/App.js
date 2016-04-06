// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FuelSavingsApp from '../components/FuelSavingsApp';
import Customers from '../components/Customers';
import * as fuelSavingsActions from '../actions/fuelSavingsActions';
import { fetchCustomers } from '../actions/customerActions';

class App extends React.Component {
  render() {
    const { customers, fuelSavings, fuelSavingsActions, fetchCustomers, loading } = this.props;

    return (
      <div>
        <FuelSavingsApp
          fuelSavings={fuelSavings}
          actions={fuelSavingsActions}  />
        <Customers
          fetchCustomers={fetchCustomers}
          customers={customers}
          loading={loading} />
      </div>
    );
  }
}

App.propTypes = {
  // Actions
  fuelSavingsActions: PropTypes.object.isRequired,
  fetchCustomers: PropTypes.func.isRequired,

  // Data
  fuelSavings: PropTypes.object.isRequired,
  customers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

// Tell Redux exactly what state slice we want from the global state
// Note that state.fuelSavingsAppState below is the name of
// the reducer function in /reducers/fuelSavings.js
function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings,
    customers: state.customers,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // Showing two different approaches here.
    // Bindactioncreators will wrap all actions in fuelSavingsActions
    // in a dispatch call so they're all available to the component
    // above on this.props.fuelSavingsActions. For fetchCustomers,
    // I'm showing how to manually map one action at a time.
    fuelSavingsActions: bindActionCreators(fuelSavingsActions, dispatch),
    fetchCustomers: () => dispatch(fetchCustomers())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
