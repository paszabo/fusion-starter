import React from 'react';
import Griddle from 'griddle-react';
import {PageHeader, Panel, Well, Button} from 'react-bootstrap';

const vehicleData = require('../../data/vehicles');

const DataTablesPage = () => {
  return (
    <div>
      <PageHeader>Data Tables <small>Griddle</small></PageHeader>

      <Panel header='Advanced Data Tables'>

        <Griddle results={vehicleData} tableClassName='table' showFilter={true}
          showSettings={true} initialSort='Make' initialSortAscending={true}
          useGriddleStyles={false}
          columns={['Make', 'Model', 'Year', 'Price']} />
        <br/>

        <Well style={{marginBottom: 0}}>
          <h4>Griddle Usage Information</h4>

          <p>Griddle is a very flexible, advanced grid component for React. In Fusion UI, we are using a customized version of Griddle styled for Bootstrap 3.
          We have also customized many user ineterface elements to use React-Bootstrap components. For complete documentation on Griddle, visit the Griddle website
          at <Button bsStyle='link' style={{padding: 0}} target='_blank' href='http://griddlegriddle.github.io/Griddle/'>{'http://griddlegriddle.github.io/Griddle/'}</Button>.</p>

          <Button bsSize='large' block href='http://griddlegriddle.github.io/Griddle/' target='_blank'>View Griddle Documentation</Button>
        </Well>

      </Panel>

    </div>
  );
};

export default DataTablesPage;
