/* eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';
import { Media, Label, Col, Image } from 'react-bootstrap';

let sampledetails = [
  {'Ext Color': 'Scarlet Red Pearl'},
  {'Int Color': 'Beige'},
  {'Odometer': '6'},
  {'Stock #': 'D09629'},
  {'MSRP': '$20,635'},
  {'VIN':'SGDS0FG7DSYG'}
];

const VehicleDetail = () => {
  return (
    <section className="vo" id="vehicle-object">

      <Media className="vo__media">
        <Media.Left className="vo__media-vehimg vo__media-vehimg--left">
          <Image className="vo__media-vehimg-thumb" alt="vehicle thumbnail" src={require('../../../../assets/images/sample-vehicle.jpg')} width={160}/>
        </Media.Left>
        <Media.Body className="vo__media-body">
          <Media.Heading className="vo__media-body__vehicle-name">2016 Elantra GT</Media.Heading>
          <p className="vo__media-body__description">2.0L GDI 4-cyl 6-speed Automatic</p>
          <p className="vo__media-body__description-detail">
            <span className="text-info">Stock #: D09629</span><br/>
            <span className="">MSRP: $20,635</span>
          </p>
        </Media.Body>
      </Media>

      <div className="vo__labels">
        <Label htmlFor="price-drop" bsStyle="danger" className="vo__label">Price Drop</Label>{' '}
        <Label htmlFor="high-demand" bsStyle="success" className="vo__label">High Demand</Label>
      </div>

      <div className="vo__vd">
        <h1 className="vo__vd-header display-4">Vehicle Details</h1>

        <VDSpecs details={sampledetails} />

      </div>

    </section>
  );
};

const VDSpecs = (props) => {
  const details = props.details || {};
  return(
    <div>
    {details.map(function(detail, i){
      return (
      <Col key={i} lg={2} md={4} sm={4} xs={12} className="vo__vd-item m-b" data-vo-item={i}>
        <div className="vo__vd-item__label">{Object.keys(detail)}</div>
        <div className="vo__vd-item__value">{detail[Object.keys(detail)]}</div>
      </Col>
      );
    })}
    </div>
  );
};
VDSpecs.propTypes = {
  details: PropTypes.array.isRequired
};

export default VehicleDetail;
/* eslint-enable react/no-multi-comp */
