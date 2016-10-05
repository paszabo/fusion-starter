import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

// Example components for the Kitchen Sink
import HeaderExample from '../widgets/KitchenSink/HeaderExample';
import TableExample from '../widgets/KitchenSink/TableExample';
import ContentExample from '../widgets/KitchenSink/ContentExample';
import FormExample from '../widgets/KitchenSink/FormExample';
import ButtonExample from '../widgets/KitchenSink/ButtonExample';
import ImageExample from '../widgets/KitchenSink/ImageExample';
import DropdownExample from '../widgets/KitchenSink/DropdownExample';
import InputExample from '../widgets/KitchenSink/InputExample';
import NavExample from '../widgets/KitchenSink/NavExample';
import NavbarExample from '../widgets/KitchenSink/NavbarExample';
import PaginationExample from '../widgets/KitchenSink/PaginationExample';
import LabelExample from '../widgets/KitchenSink/LabelExample';
import AlertExample from '../widgets/KitchenSink/AlertsExample';
import ProgressExample from '../widgets/KitchenSink/ProgressExample';
import MediaExample from '../widgets/KitchenSink/MediaExample';
import DialogExample from '../widgets/KitchenSink/DialogExample';
import ListgroupExample from '../widgets/KitchenSink/ListgroupExample';
import PanelExample from '../widgets/KitchenSink/PanelExample';
import UtilitiesExample from '../widgets/KitchenSink/UtilitiesExample';
import EntypoIconDisplay from '../widgets/KitchenSink/EntypoIconDisplay';

const AtomsPage = () => {
  return (
    <div>
      <PageHeader>Atoms <small>UI Elements</small></PageHeader>

      <Panel header='Tracksuit Style Guide'>
        <p><strong>Tracksuit</strong> is a style guide that defines modifications to <strong>Bootstrap 3</strong> that are
        intended to give Bootstrap a more modern look for business applications.  It includes larger touch targets for
        elements that need to be accessible on mobile devices. This style guide is incorporated into the <strong>Fusion</strong>{' '}
        architecture. Check out the <strong>Tracksuit Kitchen Sink and source code</strong> for more information {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://github.com/releaf/tracksuit-theme-bootstrap3'>{'https://github.com/releaf/tracksuit-theme-bootstrap3'}</Button>.</p>
      </Panel>

      <Panel header='React-Bootstrap'>
        <p><strong>React-Bootstrap</strong>{' '} is responsible for implementing the components on this page. The documentation for their components can be found at {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://react-bootstrap.github.io/'>{'https://react-bootstrap.github.io/'}</Button>.{' '}
        You can also view the source for these example components in the <strong>KitchenSink</strong>{' '} folder.</p>
      </Panel>

      <Row>
        <Col lg={6}>
          <Panel header="Headings" id="headings">
            <HeaderExample/>
          </Panel>
          <Panel header="Tables" id="tables">
            <TableExample/>
          </Panel>
        </Col>
        <Col lg={6}>
          <Panel header="Content Formatting" id="content-formatting">
            <ContentExample/>
          </Panel>
        </Col>
      </Row>

      <Panel header="Forms" id="forms">
        <FormExample/>
      </Panel>

      <Row>
        <Col lg={12}>
          <Panel header="Buttons" id="buttons">
            <ButtonExample/>
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Panel header="Images">
              <ImageExample/>
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={3}>
          <Panel header="Dropdowns" id="dropdowns">
            <DropdownExample/>
          </Panel>
        </Col>
        <Col lg={9}>
          <Panel header="Input Groups" id="input-groups">
            <InputExample/>
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Panel header="Navs" id="navs">
            <NavExample/>
          </Panel>
        </Col>
        <Col lg={6}>
          <Panel header="Navbar" id="navbar">
            <NavbarExample/>
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Panel header="Pagination" id="pagination">
            <PaginationExample/>
          </Panel>
          <Panel header="Labels and Badges" id="labels">
            <LabelExample/>
          </Panel>
        </Col>
        <Col lg={6}>
          <Panel header="Alerts" id="alerts">
            <AlertExample/>
          </Panel>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Panel header="Progress Bars" id="progress">
            <ProgressExample/>
          </Panel>
        </Col>
        <Col lg={6}>
          <Panel header="Media Object" id="media-object">
            <MediaExample/>
          </Panel>
          <Panel header="Dialogs" id="dialogs">
            <DialogExample />
          </Panel>
        </Col>
      </Row>

      <Panel header="List Groups" id="list-groups">
        <ListgroupExample/>
      </Panel>

      <Panel header="Panels" id="panels">
        <PanelExample/>
      </Panel>

      <Panel header="Entypo Icons" id="entypo-icons">
        <EntypoIconDisplay/>
      </Panel>

      <Row>
        <Col lg={12}>
          <UtilitiesExample/>
        </Col>
      </Row>
    </div>
  );
};

export default AtomsPage;
