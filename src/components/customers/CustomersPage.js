import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchCustomers} from '../../actions/customerActions';

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.onFetchCustomersClick = this.onFetchCustomersClick.bind(this);
  }
  onFetchCustomersClick(event) {
    event.preventDefault();
    this.props.fetchCustomers();
  }

  render() {
    const {customers, loading} = this.props;

    return (
      <div>
        <h2>Customers</h2>
        <p>This app uses <a href="https://github.com/gaearon/redux-thunk">redux-thunk</a> to make AJAX calls. This simple app shows how to call existing APIs hosted locally on IIS.
          </p>
          <p>
            How's this work? It makes a <a href="http://www.html5rocks.com/en/tutorials/cors/">CORS</a> call from the Node-based webserver serving this app to your IIS hosted APIs.
          </p>
        <p>
          To test this:
        </p>
        <ol>
          <li>Build CRMServiceBase</li>
          <li>Add a host entry as outlined in the <a href="https://github.com/cox-auto-kc/fusion-starter#initial-machine-setup">initial machine setup</a></li>
          <li>Log in to VinConnect on your local machine</li>
          <li>Click the Get Customers button below.</li>
        </ol>
        {loading && <h1>Loading...</h1>}
        <input type="submit"
               value="Get Customers"
               className="btn btn-primary"
               onClick={this.onFetchCustomersClick}/>
        {customers.length > 0 && <p>Success! {customers.length} customers found.</p>}
      </div>
    );
  }
}

Customers.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
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
    fetchCustomers: () => dispatch(fetchCustomers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
