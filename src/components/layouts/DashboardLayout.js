import React, {PropTypes} from 'react';
import HeaderBar from '../widgets/Header/HeaderBar';
import LeftNavigation from '../widgets/LeftNavigation/LeftNavigation';

const DashboardLayout = ({children}) => {
  return (
    <div id='wrapper' className='content'>

      <HeaderBar />

      <div className='left-nav-container'>
        <LeftNavigation />
      </div>

      <div className='page-wrapper'>
        {children}
      </div>

    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default DashboardLayout;
