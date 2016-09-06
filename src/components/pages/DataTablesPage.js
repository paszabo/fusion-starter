import React from 'react';
import Griddle from 'griddle-react';
import {PageHeader, Panel, Well, Button} from 'react-bootstrap';
import GriddleCustomPager from '../widgets/Griddle/GriddleCustomPager';
import GriddleDropdown from '../widgets/Griddle/GriddleDropdownFilter';
const vehicleData = require('../../data/vehicles');
const columnData = [
  {
    "columnName":"Make",
    "customHeaderComponent": GriddleDropdown,
  },
  {
    "columnName":"Model",
    "customHeaderComponent": GriddleDropdown,

  },
  {
    "columnName":"Year",
    "customHeaderComponent": GriddleDropdown ,
  },
  {
    "columnName":"Price",
    "customHeaderComponent": GriddleDropdown ,
  },
];

const DataTablesPage = () => {
  return (
    <div>
      <PageHeader>Data Tables <small>Griddle</small></PageHeader>

      <Panel header='Advanced Data Tables'>

        <Griddle
          tableClassName='table'
          useGriddleStyles={false}
          sortable ={false}
          results={vehicleData}
          columns={['Make', 'Model', 'Year', 'Price']}
          columnMetadata ={columnData}
          showFilter={false}
          showSettings={true}
          settingsIconComponent ={null}
          sortAscendingComponent = {""}
          sortDescendingComponent = {""}
          useCustomPagerComponent={true}
          customPagerComponent={GriddleCustomPager}
        />
        <br/>

        <Well style={{marginBottom: 0}}>
          <h4>Griddle Usage Information</h4>

          <p>Griddle is a very flexible, advanced grid component for React. In Fusion UI, we are using a customized version of Griddle styled for Bootstrap 3.
            We have also customized many user ineterface elements to use React-Bootstrap components. For complete documentation on Griddle, visit the Griddle website
            at <Button bsStyle='link' style={{padding: 0}} href='http://griddlegriddle.github.io/Griddle/'>{'http://griddlegriddle.github.io/Griddle/'}</Button>.</p>

          <Button bsSize='large' block href='http://griddlegriddle.github.io/Griddle/'>View Griddle Documentation</Button>
        </Well>

      </Panel>

    </div>
  );
};

export default DataTablesPage;
