import React from 'react';
import {FormGroup, InputGroup, Button, FormControl} from 'react-bootstrap';

const ImageExample = () => {
  return (
    <div>
      <FormGroup>
        <InputGroup>
          <InputGroup.Button>
            <Button>Go!</Button>
          </InputGroup.Button>
          <FormControl type="text" placeholder="Username"/>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <InputGroup>
          <FormControl type="text" />
          <InputGroup.Addon>.00</InputGroup.Addon>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <InputGroup>
          <InputGroup.Addon>$</InputGroup.Addon>
          <FormControl type="text" />
          <InputGroup.Addon>.00</InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    </div>
  );
};

export default ImageExample;