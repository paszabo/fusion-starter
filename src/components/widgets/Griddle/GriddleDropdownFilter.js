import React,{Component} from 'react';
import {MenuItem,Button,DropdownButton,Checkbox} from 'react-bootstrap';


class GriddleDropdown extends Component {
  constructor(props, context) {
    super(props, context);
  }

  textOnClick(e) {
    e.stopPropagation();
  }

  render(){
    let { data, filterType, columnName, ...other} = this.props;
    data = data || [];
    let filterlist = [];

    // if there's data to use...
    if(data.length > 0 && filterType === 'select') {
      const colData = new Set();

      // get all the values in this column, at to a Set object (keeps only unique values, ignores duplicates).  ES6 FTW!
      data.map(function (obj) {
        colData.add(obj[columnName]);
      });

      // reassign
      const colArray = [...colData];

      // sort ascending...
      // ... if by number or by alphanumeric...
      if(typeof colArray[0] === 'number') {
        colArray.sort(function (a, b) {
          return a - b; // ascending
        });
      } else {
        colArray.sort(); // ascending by default
      }

      // output checkboxes for each unique item to filter by.
      filterlist = colArray.map((obj,i) => {
        return <Checkbox className="griddlefilter__checkbox" key={'filter'+i}>{obj}</Checkbox>
      });
    }

    return(
      <DropdownButton className="griddlefilter__dropdown" title={this.props.columnName} id={'griddle__header-'+this.props.displayName} onClick={this.textOnClick}>

        <Button className="griddlefilter griddle--button" bsStyle="link"> Clear All </Button>

        <MenuItem header> Sort By </MenuItem>

        <ul style={{paddingLeft:30,paddingTop:0, paddingRight:10}}>
          <DropdownButton title="Descending" id={'sort-for-'+columnName+'-column'} className="griddlefilter__sortdropdown">
            <MenuItem eventKey={'eventKey'+columnName+'Descending'}>Descending</MenuItem>
            <MenuItem eventKey={'eventKey'+columnName+'Ascending'}>Ascending</MenuItem>
          </DropdownButton>
        </ul>

        { filterType === 'select' && filterlist.length > 0 ?
          <span>
            <MenuItem header>Filter By</MenuItem>
            <div className="griddlefilter__filter-checkboxes">
              {filterlist}
            </div>
          </span>
          :
          null
        }

      </DropdownButton>
    );
  }
}
GriddleDropdown.propTypes = {
  data: React.PropTypes.array,
  filterType: React.PropTypes.oneOf(['select','range']),
  content: React.PropTypes.object
};

export default GriddleDropdown;
