import React, {Component, PropTypes} from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';

class FuelSavingsTextInput extends Component {
  handleChange = e => {
    this.props.onChange(this.props.name, e.target.value);
  };

  render() {
    return (
      <FormControl
        type="text"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.handleChange}/>
    );
  }
}

FuelSavingsTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default FuelSavingsTextInput;
