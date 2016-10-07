import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import LoadingIndicator from '../widgets/LoadingIndicator/LoadingIndicator';
import DateTimePicker from '../widgets/DateTimePicker/DateTimePicker';
import DatePicker from '../widgets/DateTimePicker/DatePicker';
import TimePicker from '../widgets/DateTimePicker/TimePicker';
import MultiSelectField from '../widgets/SelectField/MultiSelectField';
import AutoSuggestSelectField from '../widgets/SelectField/AutoSuggestSelectField';

const MoleculesPage = () => {
  return (
    <div>
      <PageHeader>Molecules <small>Element Groups</small></PageHeader>

      <Panel header='React Progress Bar Plus'>
        <p>A progress bar component for React. Check out the GitHub repository for more information {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://github.com/vn38minhtran/react-progress-bar-plus'>{'https://github.com/vn38minhtran/react-progress-bar-plus'}</Button>.</p>
        <center><LoadingIndicator /></center>
      </Panel>

      <Panel header='React Bootstrap Date Time Picker'>
        <p>A Bootstrap themed date time picker for React. Check out the GitHub repository for more information {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://github.com/quri/react-bootstrap-datetimepicker'>{'https://github.com/quri/react-bootstrap-datetimepicker'}</Button>.</p>
        <p>Date and Time Picker</p>
        <DateTimePicker />
        <br />
        <p>Date Picker Only</p>
        <DatePicker />
        <br />
        <p>Time Picker Only - Read Only Input</p>
        <TimePicker />
      </Panel>

      <Panel header='React Select'>
        <p>A flexible Select Input control for React with multiselect, autocomplete and ajax support.  Check out the GitHub repository for more information {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='http://jedwatson.github.io/react-select/'>{'http://jedwatson.github.io/react-select/'}</Button>.</p>
        <Row>
          <Col sm={12} md={6}>
            <MultiSelectField label='Search Vehicle Types'/>
          </Col>
          <Col sm={12} md={6}>
            <AutoSuggestSelectField label='Please Select a State'/>
          </Col>
        </Row>
      </Panel>

    </div>
  );
};

export default MoleculesPage;
