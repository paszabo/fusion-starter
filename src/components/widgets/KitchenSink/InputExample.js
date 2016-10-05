import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';

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
