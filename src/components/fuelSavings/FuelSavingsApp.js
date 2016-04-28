import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';
import * as fuelSavingsActions from '../../actions/fuelSavingsActions';

class FuelSavingsApp extends React.Component {
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
      <div>
        <h1>Fuel Savings</h1>
        <table>
          <tbody>
          <tr>
            <td><label htmlFor="newMpg">New Vehicle MPG</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newMpg" value={settings.newMpg}/></td>
          </tr>
          <tr>
            <td><label htmlFor="tradeMpg">Trade-in MPG</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradeMpg" value={settings.tradeMpg}/></td>
          </tr>
          <tr>
            <td><label htmlFor="newPpg">New Vehicle price per gallon</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newPpg" value={settings.newPpg}/></td>
          </tr>
          <tr>
            <td><label htmlFor="tradePpg">Trade-in price per gallon</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradePpg" value={settings.tradePpg}/></td>
          </tr>
          <tr>
            <td><label htmlFor="milesDriven">Miles Driven</label></td>
            <td>
              <FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="milesDriven" value={settings.milesDriven}/>
              {" miles per "}
              <select name="milesDrivenTimeframe" onChange={this.onTimeframeChange} value={settings.milesDrivenTimeframe}>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label>Date Modified</label></td>
            <td>{settings.dateModified}</td>
          </tr>
          </tbody>
        </table>

        <hr/>

        <input type="submit" value="Save" onClick={this.save}/>
        {settings.necessaryDataIsProvidedToCalculateSavings ? <FuelSavingsResults savings={settings.savings}/> : null}
      </div>
    );
  }
}

FuelSavingsApp.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

// Tell Redux exactly what state slice we want from the global state
// Note that state.fuelSavingsAppState below is the name of
// the reducer function in /reducers/fuelSavings.js
function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // Bindactioncreators will wrap all actions in fuelSavingsActions
    // in a dispatch call so they're all available to the component
    // above on this.props.fuelSavingsActions.
    // See the Customer's App for an example of an alternative approach.
    actions: bindActionCreators(fuelSavingsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FuelSavingsApp);
