import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <IndexLink to="/">Home</IndexLink>
        {" | "}
        <Link to="components">Components</Link>
        {" | "}
        <Link to="fuelsavings">Fuel Savings</Link>
        {" | "}
        <Link to="customers">Customers</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
