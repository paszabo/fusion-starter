import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = ({children}) => {
  return (
    <div className="container-fluid">
      <IndexLink to="/">Home</IndexLink>
      {" | "}
      <Link to="gallery">Gallery</Link>
      {" | "}
      <Link to="fuelsavings">Fuel Savings</Link>
      {" | "}
      <Link to="customers">Customers</Link>
      <br/>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
