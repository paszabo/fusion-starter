import React, {PropTypes} from 'react';
import NumberFormatter from '../../../utils/numberFormatter';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Alert from 'react-bootstrap/lib/Alert';

const FuelSavingsResults = (props) => {
  const savingsExist = NumberFormatter.scrubFormatting(props.savings.monthly) > 0;
  const resultLabel = savingsExist ? 'Great! Your new vehicle will provide you savings over your previous vehicle!' : 'Oh no! Your new vehicle is not providing any savings!';
  const resultType = savingsExist ? 'success' : 'danger';

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Alert bsStyle={resultType}>
            {resultLabel}
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} lg={4}>
          <Panel><b>Monthly</b> <span className='pull-right'>{props.savings.monthly}</span></Panel>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <Panel><b>Annual</b> <span className='pull-right'>{props.savings.annual}</span></Panel>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <Panel><b>Three Year</b> <span className='pull-right'>{props.savings.threeYear}</span></Panel>
        </Col>
      </Row>
    </div>
  );
};

FuelSavingsResults.propTypes = {
  savings: PropTypes.object.isRequired
};

export default FuelSavingsResults;
