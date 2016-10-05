import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Well from 'react-bootstrap/lib/Well';

const PanelExample = () => {
  return (
    <div>
      <Row>
        <Col lg={3}>
          <Panel header="This is a header" footer="This is a footer" bsStyle="primary" id="panels">
            This is a panel.
          </Panel>
        </Col>
        <Col lg={3}>
          <Panel header="This is a header" footer="This is a footer" bsStyle="success">
            This is a panel.
          </Panel>
        </Col>
        <Col lg={3}>
          <Panel header="This is a header" footer="This is a footer" bsStyle="danger">
            This is a panel.
          </Panel>
        </Col>
        <Col lg={3}>
          <Panel header="This is a header" footer="This is a footer" bsStyle="warning">
            This is a panel.
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={3}>
          <Panel header="This is a header" footer="This is a footer" bsStyle="info">
            This is a panel.
          </Panel>
        </Col>

        <Col lg={3}>
          <Panel header="This is a header" footer="This is a footer">
            <ListGroup fill>
              <ListGroupItem>First Item</ListGroupItem>
              <ListGroupItem>Second Item</ListGroupItem>
              <ListGroupItem>Third Item</ListGroupItem>
            </ListGroup>
          </Panel>
        </Col>

        <Col lg={3}>
          <Well>Default well</Well>
        </Col>
      </Row>
    </div>
  );
};

export default PanelExample;
