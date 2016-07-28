import React from 'react';
import {ProgressBar} from 'react-bootstrap';

const ProgressExample = () => {
  return (
    <div>
      <ProgressBar now={60} />
      <ProgressBar bsStyle="success" now={40} />
      <ProgressBar bsStyle="info" now={20} />
      <ProgressBar bsStyle="warning" now={60} />
      <ProgressBar bsStyle="danger" now={80} />
      <ProgressBar>
        <ProgressBar bsStyle="success" now={35} key={1} />
        <ProgressBar bsStyle="warning" now={20} key={2} />
        <ProgressBar bsStyle="danger" now={10} key={3} />
      </ProgressBar>
    </div>
  );
};

export default ProgressExample;