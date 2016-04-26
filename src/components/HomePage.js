import React, {PropTypes} from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

const HomePage = (props) => {
  return (
    <Jumbotron>
      <h1>Vin React Starter Kit</h1>
      <h2>Get started</h2>
      <ol>
        <li>Review component examples</li>
        <li>Review example apps</li>
      </ol>
    </Jumbotron>
  );
};

export default HomePage;
