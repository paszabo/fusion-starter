import React, {PropTypes} from 'react';
import {Button, Col} from 'react-bootstrap';
import Select from 'react-select';

const states = require('../../../data/states');

class AutoSuggestSelectField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'AU',
      disabled: false,
      searchable: this.props.searchable,
      selectValue: 'new-south-wales',
      clearable: true
    };
  }

  switchCountry = e => {
    const newCountry = e.target.value;
    return (
      this.setState({
        country: newCountry,
        selectValue: null
      })
    );
  };

  updateValue = newValue => {
    return (
      this.setState({
        selectValue: newValue
      })
    );
  };

  focusStateSelect = () => {
    this.refs.stateSelect.focus();
  };

  toggleCheckbox = e => {
    const newState = {};
    newState[e.target.name] = e.target.checked;
    return (
      this.setState(
        newState
      )
    );
  };

  render() {
    const options = states[this.state.country];
    return (
      <div className='react-select__section'>
        <p className='react-select__heading'>{this.props.label}</p>
        <Select
          ref='stateSelect'
          autofocus options={options}
          simpleValue clearable={this.state.clearable}
          name='selected-state' disabled={this.state.disabled}
          value={this.state.selectValue}
          onChange={this.updateValue}
          searchable={this.state.searchable}/>
        <br/>
        <Button bsStyle='primary' onClick={this.focusStateSelect}>Focus Select</Button>

        <div className='react-select__checkbox-section'>
          <Col sm={6}>
            <label htmlFor="searchable-checkbox" className='react-select__checkbox checkbox'>
              <input id="searchable-checkbox" type='checkbox' className='checkbox-control' name='searchable' checked={this.state.searchable}
                     onChange={this.toggleCheckbox}/>{' '}
              <span className='checkbox-label'>Searchable</span>
            </label>
            <label htmlFor="disabled-checkbox" className='react-select__checkbox checkbox'>
              <input id="disabled-checkbox" type='checkbox' className='checkbox-control' name='disabled' checked={this.state.disabled}
                     onChange={this.toggleCheckbox}/>{' '}
              <span className='checkbox-label'>Disabled</span>
            </label>
            <label htmlFor="toggle-checkbox" className='react-select__checkbox checkbox'>
              <input id="toggle-checkbox" type='checkbox' className='checkbox-control' name='clearable' checked={this.state.clearable}
                     onChange={this.toggleCheckbox}/>{' '}
              <span className='checkbox-label'>Clearable</span>
            </label>
          </Col>
          <Col sm={6} className='checkbox-list'>
            <label htmlFor="switch-country-au" className='react-select__checkbox checkbox'>
              <input id="switch-country-au" type='radio' className='checkbox-control' checked={this.state.country === 'AU'} value='AU'
                     onChange={this.switchCountry}/>{' '}
              <span className='checkbox-label'>Australia</span>
            </label>
            <label htmlFor="switch-country-us" className='react-select__checkbox checkbox'>
              <input id="switch-country-us" type='radio' className='checkbox-control' checked={this.state.country === 'US'} value='US'
                     onChange={this.switchCountry}/>{' '}
              <span className='checkbox-label'>United States</span>
            </label>
          </Col>
        </div>
      </div>
    );
  }
}

AutoSuggestSelectField.propTypes = {
  label: PropTypes.string,
  searchable: PropTypes.bool
};

AutoSuggestSelectField.defaultProps = {
  label: 'States:',
  searchable: true
};

export default AutoSuggestSelectField;
