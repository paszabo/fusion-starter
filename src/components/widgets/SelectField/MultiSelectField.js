import React, {PropTypes} from 'react';
import { Col } from 'react-bootstrap';
import Select from 'react-select';

const types = [
  {label: 'Mopeds', value: 'mopeds'},
  {label: 'Coupes', value: 'coupes'},
  {label: 'Sedans', value: 'sedans'},
  {label: 'SUVs', value: 'suvs'},
  {label: 'Trucks', value: 'trucks'},
  {label: 'Hybrids', value: 'hybrids'},
  {label: 'Vans', value: 'vans'}
];

const WHY_WOULD_YOU = [
  {label: 'Mopeds (are you crazy?)', value: 'Mopeds', disabled: true}
].concat(types.slice(1));

class MultiSelectField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      crazy: false,
      options: types,
      value: []
    };
  }

  handleSelectChange = val => {
    return (
      this.setState({
        value: val
      })
    );
  };

  toggleDisabled = e => {
    this.setState({disabled: e.target.checked});
  };

  toggleVehicle = e => {
    const crazy = e.target.checked;
    this.setState({
      crazy: crazy,
      options: crazy ? WHY_WOULD_YOU : types
    });
  };

  render() {
    return (
      <div className='section'>
        <p className='react-select__heading'>{this.props.label}</p>
        <Select multi simpleValue
                disabled={this.state.disabled}
                value={this.state.value}
                placeholder='Select your favourite(s)'
                options={this.state.options}
                onChange={this.handleSelectChange}
        />

        <div className='react-select__checkbox-section'>
          <Col sm={12} md={6}>
            <label className='react-select__checkbox checkbox'>
              <input type='checkbox' className='checkbox-control' checked={this.state.disabled}
                     onChange={this.toggleDisabled}/>
              <span className='checkbox-label'>Disable the control</span>
            </label>
          </Col>

          <Col sm={12} md={6}>
            <label className='react-select__checkbox checkbox'>
              <input type='checkbox' className='checkbox-control' checked={this.state.crazy}
                     onChange={this.toggleVehicle}/>
              <span className='checkbox-label'>I don&apos;t like Mopeds (disable option)</span>
            </label>
          </Col>

        </div>
      </div>
    );
  }
}

MultiSelectField.propTypes = {
  label: PropTypes.string
};

export default MultiSelectField;
