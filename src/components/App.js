import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = ({children}) => {
  return (
    <div className="container-fluid">
      <IndexLink to="/">Home</IndexLink>
      {" | "}
      <Link to="style-guide">Style Guide</Link>
      {" | "}
      <Link to="dashboard">Dashboard Demo</Link>
      {" | "}
      <Link to="fuelsavings">Fuel Savings Demo</Link>
      {" | "}
      <Link to="customers">Customers Demo</Link>
      <br/>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
