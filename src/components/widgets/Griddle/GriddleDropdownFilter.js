/* eslint-disable react/no-multi-comp */
import React,{ Component } from 'react';
import {MenuItem,Button,DropdownButton,Checkbox} from 'react-bootstrap';


class GriddleFilterList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      filteringBy: []
    };
  }

  filterThisColumn = (e) => {
    e.stopPropagation();
    const sortvalue = e.target.dataset.sortvalue;
    const temparray = this.state.filteringBy;

    if(temparray.indexOf(sortvalue) === -1) {
      // add to state and then filter column
      temparray.push(sortvalue);
      console.log(temparray);
      this.setState({ filteringBy: temparray});
      this.props.filterByColumn(sortvalue, this.props.columnName); // this only filters by one parameter, will need to be reconfigured for multiple parameters
    } else {
      console.log('remove');
      console.log(temparray);
      // remove from state
      for(let i = temparray-1; i--;){
        if (temparray[i] === sortvalue) temparray.splice(i, 1);
      }
      this.setState({ filteringBy: temparray});
      this.props.filterByColumn('', this.props.columnName); // this only filters by one parameter, will need to be reconfigured for multiple parameters, temporarily clears filter for this column
    }
  };

  render() {
    const info = this.props.info || [];
    let filterlist = [];

    /* When filterType is "select", output Checkboxes */
    // if there's data to use...
    if (info.length > 0 && this.props.filterType === 'select') {
      const colData = new Set();

      // get all the values in this column, at to a Set object (keeps only unique values, ignores duplicates).
      info.map((obj) => {
        colData.add(obj[this.props.columnName]);
      });

      // reassign
      const colArray = [...colData];

      // sort ascending...
      // ... if by number or by alphanumeric...
      if (typeof colArray[0] === 'number') {
        colArray.sort(function (a, b) {
          return a - b; // ascending
        });
      } else {
        colArray.sort(); // ascending by default
      }

      // output checkboxes for each unique item to filter by.
      filterlist = colArray.map((obj) => {
        return (
            <li className="griddlefilter__filter-item" key={obj.toString()}>
              <Checkbox
                className="griddlefilter__checkbox"
                onClick={this.filterThisColumn}
                checked={(this.state.filteringBy.indexOf(obj) > -1) ? true : null}
                data-sortvalue={obj}
              >{obj}</Checkbox>
            </li>
        );
      });
    }

    return (
      <li className="griddlefilter__dropdownitem">
        <ul className="griddlefilter__filter-container">
          {filterlist}
        </ul>
      </li>
    );
  }
}
GriddleFilterList.propTypes = {
  info: React.PropTypes.array,
  columnName: React.PropTypes.string,
  filterType: React.PropTypes.oneOf(['select','range']),
  filterByColumn: React.PropTypes.func
};



class GriddleDropdown extends Component {
  constructor(props, context) {
    super(props, context);
  }

  textOnClick = (e) => {
    e.stopPropagation();
  };

  clearFilter = (e) => {
    this.textOnClick(e);
    this.props.filterByColumn('',this.props.columnName);
  };

  sortColumn = (eventKey) => {
    if(eventKey === 'asc') console.log('sort the '+this.props.columnName+' column Ascending');
    if(eventKey === 'des') console.log('sort the '+this.props.columnName+' column Descending');
  }

  render(){
    // let { info, filterType, columnName, ...other} = this.props;
    const props = this.props;

    return(
      <DropdownButton bsStyle="link" className="griddlefilter__dropdown" title={this.props.columnName} id={'griddle__header-'+this.props.displayName} onClick={this.textOnClick}>

        <Button className="griddlefilter griddle--button" bsStyle="link" onClick={this.clearFilter}> Clear All </Button>

        <MenuItem header> Sort By </MenuItem>

        <ul style={{paddingLeft:30,paddingTop:0, paddingRight:10}}>
          <DropdownButton title="Descending" id={'sort-for-'+this.props.columnName+'-column'} className="griddlefilter__sortdropdown">
            <MenuItem eventKey={'des'} onSelect={this.sortColumn}>Descending</MenuItem>
            <MenuItem eventKey={'asc'} onSelect={this.sortColumn}>Ascending</MenuItem>
          </DropdownButton>
        </ul>

        { this.props.filterType === 'select' ?
          <MenuItem header>Filter By</MenuItem>
          :
          null
        }
        { this.props.filterType === 'select' ?
          <GriddleFilterList {...props}/>
          :
          null
        }

      </DropdownButton>
    );
  }
}
GriddleDropdown.propTypes = {
  info: React.PropTypes.array,
  filterType: React.PropTypes.oneOf(['select','range']),
  content: React.PropTypes.object,
  columnName: React.PropTypes.string,
  displayName: React.PropTypes.string,
  filterByColumn: React.PropTypes.func
};

export default GriddleDropdown;
