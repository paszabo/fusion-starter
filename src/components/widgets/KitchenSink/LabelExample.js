import React from 'react';
import {Label, Badge} from 'react-bootstrap';

const LabelExample = () => {
  return (
    <div>
      <p>
        <Label bsStyle="default">Default</Label>{' '}
        <Label bsStyle="success">Success</Label>{' '}
        <Label bsStyle="warning">Warning</Label>{' '}
        <Label bsStyle="danger">Danger</Label>{' '}
        <Label bsStyle="info">Info</Label>
      </p>
      <p>
        <a href="#">Inbox <Badge>42</Badge></a>
      </p>
    </div>
  );
};

export default LabelExample;
