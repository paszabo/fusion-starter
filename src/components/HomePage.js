import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <Jumbotron>
      <h1>Fusion Starter</h1>
      <h2>Get started</h2>
      <ol>
        <li>Review the <Link to="style-guide">style guide</Link></li>
        <li>Review demo apps</li>
        <li>Remove demos and start coding: npm run remove-demo</li>
      </ol>

      <h2>Questions?</h2>
      <p>Check the <a href="https://github.com/cox-auto-kc/fusion-starter/blob/master/docs/FAQ.md">FAQ</a>.</p>
    </Jumbotron>
  );
};

export default HomePage;
