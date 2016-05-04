import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import FuelSavingsForm from './FuelSavingsForm';
import * as fuelSavingsActions from '../../actions/fuelSavingsActions';

// Note that I'm exporting the class here for access in testing
// This allows us to unit test this component without the
// Redux related connect code.
export class FuelSavingsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.onTimeframeChange = this.onTimeframeChange.bind(this);
    this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
  }

  save() {
    this.props.actions.saveFuelSavings(this.props.fuelSavings);
  }

  onTimeframeChange(e) {
    this.props.actions.calculateFuelSavings(this.props.fuelSavings, 'milesDrivenTimeframe', e.target.value);
  }

  fuelSavingsKeypress(name, value) {
    this.props.actions.calculateFuelSavings(this.props.fuelSavings, name, value);
  }

  render() {
    const settings = this.props.fuelSavings;

    return (
      <FuelSavingsForm
        saveFuelSavings={this.props.actions.saveFuelSavings}
        calculateFuelSavings={this.props.actions.calculateFuelSavings}
        fuelSavings={this.props.fuelSavings}
      />
    );
  }
}

FuelSavingsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // bindactioncreators will wrap all actions in fuelSavingsActions
    // in a dispatch call so they're all available to the component
    // above on this.props.fuelSavingsActions.
    // See the Customer's App for an example of an alternative approach.
    actions: bindActionCreators(fuelSavingsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FuelSavingsPage);
