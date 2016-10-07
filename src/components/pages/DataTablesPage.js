import React, {PropTypes} from 'react';
import Griddle from 'griddle-react';
import {PageHeader, Panel, Well, Button} from 'react-bootstrap';
import GriddleCustomPager from '../widgets/Griddle/GriddleCustomPager';
import {connect} from 'react-redux';

const DataTablesPage = ({vehicles}) => {
  return (
    <div>
      <PageHeader>Data Tables <small>Griddle</small></PageHeader>

      <Panel header='Advanced Data Tables'>

        <Griddle
          tableClassName='table'
          useGriddleStyles={false}
          initialSort='Make'
          initialSortAscending={true}


          results={vehicles}
          columns={['Make', 'Model', 'Year', 'Price']}

          showFilter={true}
          showSettings={true}

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

DataTablesPage.propTypes = {
  vehicles: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  };
}

export default connect(mapStateToProps)(DataTablesPage);
