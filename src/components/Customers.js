import React, {PropTypes} from 'react';

// This component shows an example of firing off an AJAX call
// to an existing service.
class Customers extends React.Component {
  onFetchCustomersClick(event) {
    event.preventDefault();
    this.props.fetchCustomers();
  }

  render() {
    const {customers, loading} = this.props;

    return (
      <div>
        {loading && <h1>Loading...</h1>}
        <a href="#" onClick={this.onFetchCustomersClick}>Fetch customers via AJAX</a>
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

export default Customers;

