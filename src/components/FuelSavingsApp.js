import React, {PropTypes} from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

const FuelSavingsApp = (props) => {
  const save = function () {
    props.actions.saveFuelSavings(props.appState);
  };

  const onTimeframeChange = function (e) {
    props.actions.calculateFuelSavings(props, 'milesDrivenTimeframe', e.target.value);
  };

  const fuelSavingsKeypress = function (name, value) {
    props.actions.calculateFuelSavings(props, name, value);
  };

  const onFetchCustomersClick = function(event) {
    event.preventDefault();
    props.actions.fetchCustomers();
  };

  const settings = props.appState;

  return (
    <div>
      <img src={require("url?limit=10000!../images/gas-pump.jpg")} width="50" height="50" title="Note that this image uses a traditional source tag because it's size is above the file size threshold specified in the require statement." />
      <img src={require("url?limit=10000!../images/gas-pump-icon.png")} width="16" height="16" title="Note that this small image is base64 encoded to save an HTTP request because it's below the file size threshold specified in the require statement." />
      {settings.ajaxCallInProgress ? <h1>Loading...</h1> : ''}
      <h2>Fuel Savings Analysis</h2>
      <table>
        <tbody>
        <tr>
          <td><label htmlFor="newMpg">New Vehicle MPG</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="newMpg" value={settings.newMpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="tradeMpg">Trade-in MPG</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="tradeMpg" value={settings.tradeMpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="newPpg">New Vehicle price per gallon</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="newPpg" value={settings.newPpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="tradePpg">Trade-in price per gallon</label></td>
          <td><FuelSavingsTextInput onChange={fuelSavingsKeypress} name="tradePpg" value={settings.tradePpg} /></td>
        </tr>
        <tr>
          <td><label htmlFor="milesDriven">Miles Driven</label></td>
          <td>
            <FuelSavingsTextInput onChange={fuelSavingsKeypress} name="milesDriven" value={settings.milesDriven} /> miles per
            <select name="milesDrivenTimeframe" onChange={onTimeframeChange} value={settings.milesDrivenTimeframe}>
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

        <input type="submit" value="Save" onClick={save} /> <a href="#" onClick={onFetchCustomersClick}>Fetch customers via AJAX</a>
        {settings.customers.length > 0 && <p> {settings.customers.length} customers found.</p>}
        {settings.necessaryDataIsProvidedToCalculateSavings ? <FuelSavingsResults savings={settings.savings} /> : null}
      </div>
  );
};

FuelSavingsApp.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

export default FuelSavingsApp;
