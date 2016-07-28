import React from 'react';
import {Col, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Button} from 'react-bootstrap';

const FormExample = () => {
  return (
    <div>
      <Form componentClass="fieldset">
        <legend>Legend</legend>
        <FormGroup controlId="exampleInputEmail">
          <ControlLabel>Email address</ControlLabel>
          <FormControl type="text" placeholder="Enter email"/>
        </FormGroup>

        <FormGroup controlId="exampleInputPassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" placeholder="Password"/>
        </FormGroup>

        <FormGroup controlId="exampleInputFile">
          <ControlLabel>File input</ControlLabel>
          <FormControl type="file"/>
          <HelpBlock>Example block-level help text here.</HelpBlock>
        </FormGroup>

        <Checkbox readOnly>Check me out </Checkbox>

        <Button type="submit">Submit</Button>
    </Form>

    <hr/>

    <Form inline>
      <FormGroup controlId="exampleInputEmail3">
        <ControlLabel srOnly>Email address</ControlLabel>
        <FormControl type="email" placeholder="Email"/>
      </FormGroup>{' '}
      <FormGroup controlId="exampleInputPassword3">
        <ControlLabel srOnly>Passsword</ControlLabel>
        <FormControl type="email" placeholder="Password"/>
      </FormGroup>{' '}
      <Checkbox>{' Remember me'}</Checkbox>{' '}
      <Button type="submit">Sign In</Button>
    </Form>

    <hr/>

    <Form horizontal>
      <FormGroup controlId="inputEmail">
        <Col componentClass={ControlLabel} lg={2}>Email</Col>
        <Col lg={10}>
          <FormControl type="text" placeholder="Email"/>
        </Col>
      </FormGroup>

      <FormGroup controlId="inputEmail2" validationState="warning">
        <Col componentClass={ControlLabel} lg={2}>Email</Col>
        <Col lg={10}>
          <FormControl type="text" placeholder="Email"/>
        </Col>
      </FormGroup>

      <FormGroup controlId="inputEmail3" validationState="error">
        <Col componentClass={ControlLabel} lg={2}>Email</Col>
        <Col lg={10}>
          <FormControl type="text" placeholder="Email"/>
        </Col>
      </FormGroup>

      <FormGroup controlId="inputEmail4" validationState="success">
        <Col componentClass={ControlLabel} lg={2}>Email</Col>
        <Col lg={10}>
          <FormControl type="text" placeholder="Email"/>
        </Col>
      </FormGroup>

      <FormGroup controlId="inputPassword">
        <Col componentClass={ControlLabel} lg={2}>Password</Col>
        <Col lg={10}>
          <FormControl type="password" placeholder="Password"/>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col lg={10} lgOffset={2}>
          <Checkbox>Remember me</Checkbox>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col lg={10} lgOffset={2}>
          <Button type="submit">Sign in</Button>
        </Col>
      </FormGroup>
    </Form>
    </div>
  );
};

export default FormExample;