import React from 'react';
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

const ListgroupExample = () => {
  return (
    <Row>
      <Col lg={4}>
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </Col>

      <Col lg={4}>
        <ListGroup>
          <ListGroupItem href="#" active>Cras justo odio</ListGroupItem>
          <ListGroupItem href="#">Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem href="#">Morbi leo risus</ListGroupItem>
          <ListGroupItem href="#">Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem href="#">Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </Col>

      <Col lg={4}>
        {/* ReactBootstrap defaults ListGroupItem Header to <h4>.  Tracksuit uses <h5>. Consult to fix. */}
        <ListGroup>
          <ListGroupItem header="List group item heading" active>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</ListGroupItem>
          <ListGroupItem header="List group item heading">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</ListGroupItem>
          <ListGroupItem header="List group item heading">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ListgroupExample;