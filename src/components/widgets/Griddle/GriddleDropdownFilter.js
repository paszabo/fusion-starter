import React,{Component} from 'react';
import {MenuItem,Button,DropdownButton,Checkbox} from 'react-bootstrap';


class GriddleDropdown extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render(){
    return(
      <DropdownButton className="griddlefilter__dropdown" title={this.props.columnName} id="bg-nested-dropdown">
        <Button className="griddlefilter griddle--button"> Clear All </Button>
        <MenuItem eventKey={1.1} disabled> Sort By </MenuItem>

      <ul style={{paddingLeft:30,paddingTop:0, paddingRight:10}}>
        <DropdownButton title="Descending" id="dropdown-size-medium" className={"griddlefilter__sortdropdown"}>
          <MenuItem eventKey="1">Descending</MenuItem>
          <MenuItem eventKey="2">Ascending</MenuItem>
        </DropdownButton>
      </ul>
        <MenuItem eventKey={1.2} disabled>Filter By</MenuItem>
         <ul>
           <Checkbox>Cash</Checkbox>
           <Checkbox>Baloon</Checkbox>
           <Checkbox>Lease</Checkbox>
           <Checkbox>Purchase</Checkbox>
         </ul>

      </DropdownButton>
    );
  }
}

export default GriddleDropdown;
