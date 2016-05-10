import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <Jumbotron>
      <h1>Vin React Starter Kit</h1>
      <h2>Get started</h2>
      <ol>
        <li>Review suggested components in the <Link to="gallery">component gallery</Link></li>
        <li>Review demo apps: <Link to="fuel-savings">Fuel Savings</Link>, <Link to="customers">Customers</Link></li>
        <li>Remove this demo and start coding: npm run remove-demo</li>
      </ol>

      <p>Questions? Check out the <a href="https://github.com/vinsolutions-kc/vin-react-starter-kit/blob/master/docs/FAQ.md">FAQ</a>.</p>

    </Jumbotron>
  );
};

export default HomePage;
