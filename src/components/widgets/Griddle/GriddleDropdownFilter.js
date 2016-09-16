/* eslint-disable react/no-multi-comp */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {MenuItem,Button,DropdownButton,Checkbox,Overlay} from 'react-bootstrap';


class GriddleDropdown extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      filteringBy: [],
      sortColumn: false,
      showImage: false,
      popover: false
    };
  }

  popoverToggle = () => {
    this.setState({ popover: !this.state.popover});
  };

  popoverClose = () => {
    this.setState({ popover: false});
  };

  textOnClick = (e) => {
    e.stopPropagation();
  };

  clearFilter = (e) => {
    this.textOnClick(e);
    this.setState({ filteringBy: [], sortColumn: false });
    this.props.filterByColumn('',this.props.columnName);
  };

  sortColumn = (eventKey) => {
    if(eventKey === 'Ascending'){
      /* set sort state to ascending */
    }
    if(eventKey === 'Descending'){
      /* set sort state to ascending */
    }
    this.setState({ sortColumn: eventKey });
  };

  filterThisColumn = (e) => {
    e.persist(); // keep event from bubbling
    const filtervalue = e.target.dataset.filtervalue; // get value to sort by.
    const temparray = this.state.filteringBy;         // will need to alter the array, but should not edit state directly.

    if(temparray.indexOf(filtervalue) === -1) {
      // add to state and then filter column
      temparray.push(filtervalue);
      this.setState({ filteringBy: temparray});
      this.props.filterByColumn(filtervalue, this.props.columnName); // !!!!! this only filters by one parameter, will need to be reconfigured for multiple parameters
    } else {
      // remove from state then re-filter
      for(let i = temparray.length; i--;){
        if (temparray[i] === filtervalue) temparray.splice(i, 1);
      }
      this.setState({ filteringBy: temparray});
      this.props.filterByColumn('', this.props.columnName); // !!!!! this only filters by one parameter, will need to be reconfigured for multiple parameters, temporarily clears filter for this column
    }
  };

  buttonRef = () => ReactDOM.findDOMNode(this.refs.target);

  render(){
    const {columnName} = this.props;
    // const DropdownImage = this.state.showImage? "fa fa-sort-amount-desc" : "fa fa-sort-amount-asc";
    const info = this.props.info || [];
    let filterlist = [];
    const headericons = {
      "filter": <svg className="griddlefilter__svg filter" viewBox="0 0 8 12"><g stroke="none" strokeWidth="1" fillRule="evenodd" transform="translate(3.000000, 6.000000) scale(-1, 1) translate(-3.000000, -6.000000) "><g transform="translate(3.000000, 5.900000) rotate(270.000000) translate(-3.000000, -5.900000) translate(-2.500000, 2.900000)"><path d="M9,0.333214762 L9,5.9952 L10.8,5.9952 L10.8,0.333214762 L9,0.333214762 L9,0.333214762 Z M6,1.59986658 L6,5.9952 L7.8,5.9952 L7.8,1.59986658 L6,1.59986658 L6,1.59986658 Z M3,2.99800053 L3,5.9952 L4.8,5.9952 L4.8,2.99800053 L3,2.99800053 L3,2.99800053 Z M0,3.99773351 L0,5.9952 L1.8,5.9952 L1.8,3.99773351 L0,3.99773351 L0,3.99773351 Z"/></g></g></svg>,
      "sortAsc": <svg className="griddlefilter__svg sortAsc" viewBox="0 0 6 12"><polygon fillRule="evenodd" points="2.70137 0 5.4027399 3.33698641 3.6836863 3.33698641 3.6836863 11.6000004 1.7190536 11.6000004 1.7190536 3.33698641 0 3.33698641"/></svg>,
      "sortDes":<svg className="griddlefilter__svg sortDes" viewBox="0 0 6 12"><polygon fillRule="evenodd" transform="translate(2.701370, 5.800000) scale(1, -1) translate(-2.701370, -5.800000) " points="2.70137 0 5.4027399 3.33698641 3.6836863 3.33698641 3.6836863 11.6000004 1.7190536 11.6000004 1.7190536 3.33698641 0 3.33698641"/></svg>
    };

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
              defaultChecked={(this.state.filteringBy.indexOf(obj) > -1) ? true : null}
              data-filtervalue={obj}
            >{obj}</Checkbox>
          </li>
        );
      });
    }

    const popoverBottom = (
      <div className="griddlefilter__popover arrow" id={"overload-bottom"+columnName}>

        <div className="griddlefilter__sortstyle">
          <Button className="griddlefilter__linkbutton" bsStyle="link" onClick={this.clearFilter}>Clear All</Button>
        </div>

        <div className="griddlefilter__sort text-muted" >Sort By</div>

        <div className="griddlefilter__dropdownbutton">
          <DropdownButton title={(this.state.sortColumn) ? this.state.sortColumn : 'Descending'} id={'sort-for-'+this.props.columnName+'-column'} className="griddlefilter__sortdropdown" block>
            <MenuItem eventKey={'Descending'} onSelect={this.sortColumn}>Descending</MenuItem>
            <MenuItem eventKey={'Ascending'} onSelect={this.sortColumn}>Ascending</MenuItem>
          </DropdownButton>
        </div>

        { this.props.filterType === 'select' ?
          <div className="griddlefilter__sort text-muted">Filter By</div>
          :
          null
        }
        { this.props.filterType === 'select' ?
          <span className="griddlefilter__dropdownitem">
            <ul className="griddlefilter__filter-container" style={{'listStyle':'none outside none'}}>
              {filterlist}
            </ul>
          </span>
          :
          null
        }
      </div>
    );

    return(
      <div>
        <Button
          ref="target"
          bsStyle="link"
          id={'griddle__header-'+ this.props.displayName}
          className={'griddlefilter__header-button' + ((this.state.popover)? ' griddlefilter__header-button--active' : '')}
          onClick={this.popoverToggle}
        >
          {columnName + ' '}
          <i className="griddlefilter__sorticon griddlefilter__sorticon-asc">{headericons.sortAsc}</i>
          <i className="griddlefilter__sorticon griddlefilter__sorticon-des">{headericons.sortDes}</i>
          { this.props.filterType ?
            <i className="griddlefilter__sorticon griddlefilter__sorticon-filter">{headericons.filter}</i>
            : null
          }
        </Button>

        <div className="griddlefilter__overlay" style={{position:'relative'}}>
          <Overlay
            show={this.state.popover}
            onHide={this.popoverClose}
            placement="bottom"
            container={this}
            target={this.buttonRef}
            rootClose={true}
          >
            {popoverBottom}
          </Overlay>
        </div>
      </div>
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
