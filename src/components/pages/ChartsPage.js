/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import {PageHeader, Panel, Well, Button, Row, Col} from 'react-bootstrap';

// TODO: Replace with actual implementation and remove iframe...
const D3Frame = ({chart}) => (
  <div>
    <iframe
      style={{border: 'none', width: '100%', height: 300}}
      scrolling='no'
      src={`https://coxautokc.github.io/react-d3-responsive/${chart}`}
    />
  </div>
);

D3Frame.propTypes = {
  chart: PropTypes.string.isRequired
};

const ChartsPage = () => {
  return (
    <div>
      <PageHeader>Charts <small>D3.js</small></PageHeader>

      <Panel header='Area Line Graph' style={{width: '100%', height: 411}}>
        <div id='d3-area-chart' style={{width: '100%', height: 342}}>
          <D3Frame chart='areagraph/index.html' />
        </div>
      </Panel>

      <Row>
        <Col xs={12} sm={12} md={6}>
          <Panel header='Line Graph' style={{width: '100%', height: 400}}>
            <div id='d3-line-chart' style={{width: '100%', height: 300}}>
              <D3Frame chart='linegraph/index.html' />
            </div>
          </Panel>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Panel header='Bar Graph' style={{width: '100%', height: 400}}>
            <div id='d3-bar-chart' style={{width: '100%', height: 300}}>
              <D3Frame chart='bargraph/index.html' />
            </div>
          </Panel>
        </Col>
      </Row>

      <Well>
        <h4>D3 Usage Information</h4>

        <p>D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s
        emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining
        powerful visualization components and a data-driven approach to DOM manipulation. For complete documentation on D3, visit the D3 website
        at <Button bsStyle='link' style={{padding: 0}} target='_blank' href='https://d3js.org'>{'https://d3js.org'}</Button>.</p>

        <Button bsSize='large' block href='https://d3js.org' target='_blank'>View D3 Documentation</Button>
      </Well>

    </div>
  );
};

export default ChartsPage;
/* eslint-enable react/no-multi-comp */
