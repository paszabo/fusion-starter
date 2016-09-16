import React from 'react';
import Griddle from 'griddle-react';
import {PageHeader, Panel, Well, Button} from 'react-bootstrap';
import GriddleCustomPager from '../widgets/Griddle/GriddleCustomPager';
import GriddleDropdown from '../widgets/Griddle/GriddleDropdownFilter';
const vehicleData = require('../../data/vehicles');
const columnData = [
  {
    "sortable": false,
    "columnName":"Make",
    "customHeaderComponent": GriddleDropdown,
    "customHeaderComponentProps": { info: vehicleData, filterType: "select" }
  },
  {
    "sortable": false,
    "columnName":"Model",
    "customHeaderComponent": GriddleDropdown,
    "customHeaderComponentProps": { info: vehicleData, filterType: "select" }
  },
  {
    "sortable": false,
    "columnName":"Year",
    "customHeaderComponent": GriddleDropdown,
    "customHeaderComponentProps": { info: vehicleData, filterType: "select" }
  },
  {
    "sortable": false,
    "columnName":"Price",
    "customHeaderComponent": GriddleDropdown,
    "customHeaderComponentProps": { info: vehicleData, filterType: "select" }
  },
];
/*
 Column filters can only filter on one value at a time.  Any more than that involves using the externalData feature of Griddle to sort/filter the data before it gets to the table, and then update the React state after the data gets updated.

 Most likely, columns will have to have {"sortable":false} set in their ColumnMetaData (above) so that clicking on the table headers doesn't sort the column.  Column sorting would, again, be handled by Griddle's state updates.

 -jh 9/16/16
 */

const DataTablesPage = () => {
  return (
    <div>
      <PageHeader>Data Tables <small>Griddle</small></PageHeader>

      <Panel header='Advanced Data Tables'>

        <Griddle
          initialSort="Make"
          tableClassName='table griddlefilters'
          useGriddleStyles={false}
          results={vehicleData}
          columns={['Make', 'Model', 'Year', 'Price']}
          columnMetadata={columnData}
          showFilter={false}
          showSettings={true}
          settingsIconComponent={null}
          sortAscendingComponent={""}
          sortDescendingComponent={""}
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
