import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchCustomers} from '../actions/customerActions';

class Customers extends React.Component {
  onFetchCustomersClick(event) {
    event.preventDefault();
    this.props.fetchCustomers();
  }

  render() {
    const {customers, loading} = this.props;

    return (
      <div>
        <h1>Customers</h1>
        <p>This simple app shows how to use <a href="https://github.com/gaearon/redux-thunk">redux-thunk</a> to make AJAX calls.</p>
        {loading && <h1>Loading...</h1>}
        <input type="submit"
               value="Get Customers"
               className="btn btn-primary"
               onClick={this.onFetchCustomersClick}/>
        {customers.length > 0 && <p> {customers.length} customers found.</p>}
      </div>
    );
  }
}

Customers.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    customers: state.customers,
    loading: state.loadingStatus.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCustomers: () => dispatch(fetchCustomers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);

