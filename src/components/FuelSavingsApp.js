import React, {PropTypes} from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

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
        <img src={require("../images/gas-pump.jpg")} width="50" height="50"
             title="Note that this image uses a traditional source tag because it's size is above the file size threshold specified in the require statement."/>
        <img src={require("../images/gas-pump-icon.png")} width="16" height="16"
             title="Note that this small image is base64 encoded to save an HTTP request because it's below the file size threshold specified in the require statement."/>
        <h2>Fuel Savings Analysis</h2>
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
              miles per
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

export default FuelSavingsApp;
