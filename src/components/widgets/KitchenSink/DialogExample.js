/* eslint-disable react/no-multi-comp */
import React from 'react';
import {Button, Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';

class DialogExample extends React.Component {
  constructor(props){
    super(props);
    this.state = { showModal: false };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close(){
    this.setState({ showModal: false });
  }
  open(){
    this.setState({ showModal: true });
  }

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

        <p>
          <Button onClick={this.open}>Small Modal</Button>
        </p>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Small modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal content goes here.</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default DialogExample;
