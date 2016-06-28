import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {submitSearchCustomers, submitLogin} from '../../actions/customerActions';

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.state = {
      username: null,
      password: null
    };
  }

  onLoginClick(event) {
    event.preventDefault();
    this.props.submitLogin();
  }

  onSearchClick(event) {
    event.preventDefault();
    this.props.submitSearchCustomers();
  }

  onInputChange(event) {
    const newState = this.state;
    const field = event.target.name;
    newState[field] = event.target.value;
    return this.setState(newState);
  }

  render() {
    const {customers, loading} = this.props;

    return (
      <div>
        <h2>Customers</h2>
        <p>This app shows how to use <a href="https://github.com/gaearon/redux-thunk">redux-thunk</a> to make AJAX calls to existing APIs in QA.</p>
        {loading && <h1>Loading...</h1>}
        <input type="text" />
        <input type="submit"
               value="Search"
               className="btn btn-primary"
               onClick={this.onSearchClick}/>

        <input type="text"
               name="username"
               value={this.state.username}
               onChange={this.onInputChange}
        />

        <input type="text"
               name="password"
               value={this.state.password}
               onChange={this.onInputChange}
        />

        <input type="submit"
               value="Login"
               className="btn btn-primary"
               onClick={this.onLoginClick}/>

        {customers.length > 0 && <p> {customers.length} customers found.</p>}
      </div>
    );
  }
}

Customers.propTypes = {
  submitSearchCustomers: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    customers: state.customers,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitSearchCustomers: () => dispatch(submitSearchCustomers()),
    submitLogin: () => dispatch(submitLogin())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);

