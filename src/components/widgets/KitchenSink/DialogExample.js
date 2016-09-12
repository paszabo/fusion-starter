/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import {Button, ButtonToolbar, Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';

class DialogExample extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      smShow: false,
      mdShow: false,
      lgShow: false,
      flShow: false
    };
  }

  toggleSm = () => {
    this.setState({ smShow: !this.state.smShow });
  };

  toggleMd = () => {
    this.setState({ mdShow: !this.state.mdShow });
  };

  toggleLg = () => {
    this.setState({ lgShow: !this.state.lgShow });
  };

  toggleFl = () => {
    this.setState({ flShow: !this.state.flShow });
  };

  render(){
    return (
      <div>
        <p>
          <OverlayTrigger trigger="click" placement="top" overlay={<Popover title="Popover" id="examplePopover">And here&apos;s some amazing content. It&apos;s very engaging. Right?</Popover>}>
            <Button bsStyle="default">Popover</Button>
          </OverlayTrigger>
        </p>

        <p>
          <OverlayTrigger placement="top" overlay={<Tooltip id="exampleTooltip">Tooltip on top</Tooltip>}>
            <Button bsStyle="default">Tooltip</Button>
          </OverlayTrigger>
        </p>

        <ButtonToolbar>
          <Button onClick={this.toggleSm}>Small Modal</Button>
          <Button onClick={this.toggleMd}>Default Modal</Button>
          <Button onClick={this.toggleLg}>Large Modal</Button>
          <Button onClick={this.toggleFl}>Full Page Modal</Button>
        </ButtonToolbar>

        <SmallModal show={this.state.smShow} onHide={this.toggleSm} />
        <DefaultModal show={this.state.mdShow} onHide={this.toggleMd} />
        <LargeModal show={this.state.lgShow} onHide={this.toggleLg} />
        <FullModal show={this.state.flShow} onHide={this.toggleFl} dialogClassName="modal-full"/>
      </div>
    );
  }
}

const SmallModal = (props) =>
  <Modal {...props} bsSize="small">
    <Modal.Header closeButton>
      <Modal.Title>Small Modal Example</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Modal content goes here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

SmallModal.propTypes = {
  onHide: PropTypes.func.isRequired
};

const DefaultModal = (props) =>
  <Modal {...props}>
    <Modal.Header closeButton>
      <Modal.Title>Default Modal Example</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Modal content goes here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

DefaultModal.propTypes = {
  onHide: PropTypes.func.isRequired
};

const LargeModal = (props) =>
  <Modal {...props} bsSize="large">
    <Modal.Header closeButton>
      <Modal.Title>Large Modal Example</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Modal content goes here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

LargeModal.propTypes = {
  onHide: PropTypes.func.isRequired
};

const FullModal = (props) =>
  <Modal {...props}>
    <Modal.Header closeButton>
      <Modal.Title>Full Page Modal Example</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Modal content goes here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cancel</Button>
      <Button onClick={props.onHide} bsStyle="primary">Confirm</Button>
    </Modal.Footer>
  </Modal>;

FullModal.propTypes = {
  onHide: PropTypes.func.isRequired
};

export default DialogExample;
