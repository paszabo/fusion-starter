import React from 'react';
import {Label, Badge} from 'react-bootstrap';

const LabelExample = () => {
  return (
    <div>
      <p>
        <Label htmlFor="label-default" bsStyle="default">Default</Label>{' '}
        <Label htmlFor="label-success" bsStyle="success">Success</Label>{' '}
        <Label htmlFor="label-warning" bsStyle="warning">Warning</Label>{' '}
        <Label htmlFor="label-danger" bsStyle="danger">Danger</Label>{' '}
        <Label htmlFor="label-info" bsStyle="info">Info</Label>
      </p>
      <p>
        <a href="#">Inbox <Badge>42</Badge></a>
      </p>
    </div>
  );
};

export default LabelExample;
