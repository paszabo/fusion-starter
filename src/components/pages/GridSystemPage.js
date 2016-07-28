import React from 'react';
import {PageHeader, Panel, Button, Row, Col} from 'react-bootstrap';

const GridSystemPage = () => {
  return (
    <div>
      <PageHeader>Grid System</PageHeader>

      <Panel header='React-Bootstrap Grid Components'>
        <p><strong>React-Bootstrap</strong> comes equiped with a componetized grid system that utilizes the grid system supplied by
        Bootstrap 3. It allows for components to be customized via parameters of type number as opposed to manipulating
        markup by setting className values with strings.  Read more about it at {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://react-bootstrap.github.io/components.html#grid'>{'https://react-bootstrap.github.io/components.html#grid'}</Button>.</p>
      </Panel>

      <Row>
        <Col lg={12} className="text-center">
          <Panel>
            .col-lg-12
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={6} className="text-center">
          <Panel>
            .col-lg-6
          </Panel>
        </Col>
        <Col lg={6} className="text-center">
          <Panel>
            .col-lg-6
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={4} className="text-center">
          <Panel>
            .col-lg-4
          </Panel>
        </Col>
        <Col lg={4} className="text-center">
          <Panel>
            .col-lg-4
          </Panel>
        </Col>
        <Col lg={4} className="text-center">
          <Panel>
            .col-lg-4
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={3} className="text-center">
          <Panel>
            .col-lg-3
          </Panel>
        </Col>
        <Col lg={3} className="text-center">
          <Panel>
            .col-lg-3
          </Panel>
        </Col>
        <Col lg={3} className="text-center">
          <Panel>
            .col-lg-3
          </Panel>
        </Col>
        <Col lg={3} className="text-center">
          <Panel>
            .col-lg-3
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={2} className="text-center">
          <Panel>
            .col-lg-2
          </Panel>
        </Col>
        <Col lg={2} className="text-center">
          <Panel>
            .col-lg-2
          </Panel>
        </Col>
        <Col lg={2} className="text-center">
          <Panel>
            .col-lg-2
          </Panel>
        </Col>
        <Col lg={2} className="text-center">
          <Panel>
            .col-lg-2
          </Panel>
        </Col>
        <Col lg={2} className="text-center">
          <Panel>
            .col-lg-2
          </Panel>
        </Col>
        <Col lg={2} className="text-center">
          <Panel>
            .col-lg-2
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
        <Col lg={1} className="text-center">
          <Panel>
            .col-lg-1
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="text-center">
          <Panel>
            .col-lg-8
          </Panel>
        </Col>
        <Col lg={4} className="text-center">
          <Panel>
            .col-lg-4
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={3} className="text-center">
          <Panel>
            .col-lg-3
          </Panel>
        </Col>
        <Col lg={6} className="text-center">
          <Panel>
            .col-lg-6
          </Panel>
        </Col>
        <Col lg={3} className="text-center">
          <Panel>
            .col-lg-3
          </Panel>
        </Col>
      </Row>

    </div>
  );
};

export default GridSystemPage;
