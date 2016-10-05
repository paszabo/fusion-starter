import React from 'react';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const DropdownExample = () => {
  return (
    <div>
      <ul className="dropdown-menu open" style={{display:'block',position:'static'}}>
        <MenuItem header>Dropdown Header</MenuItem>
        <MenuItem disabled href="#a">Action</MenuItem>
        <MenuItem href="#a">Another Action</MenuItem>
        <MenuItem href="#a">Something else here</MenuItem>
        <MenuItem divider/>
        <MenuItem href="#a">Separated link</MenuItem>
      </ul>
    </div>
  );
};

export default DropdownExample;
