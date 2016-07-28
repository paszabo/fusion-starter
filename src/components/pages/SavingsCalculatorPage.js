import React, {PropTypes} from 'react';
import {PageHeader, Panel, Button, Col, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FuelSavingsResults from '../widgets/FuelSavings/FuelSavingsResults';
import FuelSavingsTextInput from '../widgets/FuelSavings/FuelSavingsTextInput';
import * as fuelSavingsActions from '../../actions/fuelSavingsActions';

class SavingsCalculatorPage extends React.Component {
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
        <PageHeader>Fuel Savings Calculator</PageHeader>

        <Panel>

          <Form horizontal>

            {/* New MPG */}
            <FormGroup controlId="newMpg">
              <Col componentClass={ControlLabel} lg={3}>New Vehicle MPG</Col>
              <Col lg={9}>
                <FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newMpg" value={settings.newMpg}/>
              </Col>
            </FormGroup>

            {/* Trade-in MPG */}
            <FormGroup controlId="tradeMpg">
              <Col componentClass={ControlLabel} lg={3}>Trade-in MPG</Col>
              <Col lg={9}>
                <FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradeMpg" value={settings.tradeMpg}/>
              </Col>
            </FormGroup>

            {/* New PPG */}
            <FormGroup controlId="newPpg">
              <Col componentClass={ControlLabel} lg={3}>New Vehicle price per gallon</Col>
              <Col lg={9}>
                <FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newPpg" value={settings.newPpg}/>
              </Col>
            </FormGroup>

            {/* Trade-in PPG */}
            <FormGroup controlId="tradePpg">
              <Col componentClass={ControlLabel} lg={3}>Trade-in price per gallon</Col>
              <Col lg={9}>
                <FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradePpg" value={settings.tradePpg}/>
              </Col>
            </FormGroup>

            {/* Miles Driven */}
            <FormGroup controlId="milesDriven">
              <Col componentClass={ControlLabel} lg={3}>Miles Driven</Col>
              <Col lg={9}>
                <FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="milesDriven" value={settings.milesDriven}/>
              </Col>
            </FormGroup>

            {/* Miles Driven - Time Frame */}
            <FormGroup controlId="milesDrivenTimeframe">
              <Col componentClass={ControlLabel} lg={3}>Miles Per</Col>
              <Col lg={9}>
                <FormControl componentClass="select" name="milesDrivenTimeframe" onChange={this.onTimeframeChange} value={settings.milesDrivenTimeframe}>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </FormControl>
              </Col>
            </FormGroup>

            {/* Date Modified and Save Button */}
            <FormGroup controlId="dateMod">
              <Col lg={9} lgOffset={3}>Date Modified{' '}{settings.dateModified}{' '}</Col>
            </FormGroup>
            <FormGroup>
              <Col lg={9} lgOffset={3}>
                <Button bsStyle="primary" onClick={this.save}>Save</Button>
              </Col>
            </FormGroup>

          </Form>

        </Panel>

        {/* Results! */}
        {settings.necessaryDataIsProvidedToCalculateSavings ? <FuelSavingsResults savings={settings.savings}/> : null}

      </div>
    );
  }
}

SavingsCalculatorPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SavingsCalculatorPage);
