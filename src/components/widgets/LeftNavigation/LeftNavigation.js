import React, {PropTypes} from 'react';
import {IndexLink} from 'react-router';
import FontAwesome from 'react-fontawesome';

const LeftNavigation = () => {
  return (
    <div className="left-nav">
      <ul className="left-nav__pills nav nav-stacked">

        {/* Dashboard */}
        <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/'>
            <FontAwesome name='dashboard' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Dashboard Example</span>
          </IndexLink>
        </li>

        {/* Savings Calculator */}
        <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/savingscalc'>
            <FontAwesome name='calculator' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Savings Calculator</span>
          </IndexLink>
        </li>

        {/* Data Tables */}
         <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/datatables'>
            <FontAwesome name='table' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Data Tables</span>
          </IndexLink>
        </li>

        {/* Charts */}
        <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/charts'>
            <FontAwesome name='bar-chart' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Charts</span>
          </IndexLink>
        </li>

        {/* Rich Text Editor */}
         <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/rte'>
            <FontAwesome name='pencil-square-o' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Rich Text Editor</span>
          </IndexLink>
        </li>

        {/* Lazy Loading */}
         <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/lazyload'>
            <FontAwesome name='spinner' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Lazy Loading</span>
          </IndexLink>
        </li>

        {/* Other Components */}
         <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/components'>
            <FontAwesome name='wrench' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Other Components</span>
          </IndexLink>
        </li>

        {/* Grid System */}
         <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/grid'>
            <FontAwesome name='th' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Grid System</span>
          </IndexLink>
        </li>

        {/* Atoms */}
         <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/atoms'>
            <FontAwesome name='toggle-off' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Atoms</span>
          </IndexLink>
        </li>

        {/* Molecules */}
         <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/molecules'>
            <FontAwesome name='tasks' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Molecules</span>
          </IndexLink>
        </li>

        {/* Organisms */}
         <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/organisms'>
            <FontAwesome name='object-group' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Organisms</span>
          </IndexLink>
        </li>

        {/* Templates */}
         <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/templates'>
            <FontAwesome name='files-o' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Templates</span>
          </IndexLink>
        </li>

        {/* Documentation */}
         <li role="presentation">
          <IndexLink activeClassName='left-nav__link--active' className='left-nav__link' to='/docs'>
            <FontAwesome name='book' fixedWith={true} />
            <span className='hidden-xs hidden-sm'>{' '}Documentation</span>
          </IndexLink>
        </li>

      </ul>
    </div>
  );
};

LeftNavigation.propTypes = {
  location: PropTypes.object
};

export default LeftNavigation;
