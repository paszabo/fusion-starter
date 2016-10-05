/* eslint-disable react/no-multi-comp */
import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const NavExample = () => {
  return (
    <div>
      <TabbedNav />
      <br/>
      <PillNav />
      <br/>
      <StackedPillNav />
    </div>
  );
};

// Separate Nav examples broken down to use their individual states to change active nav items.

class TabbedNav extends React.Component {
  constructor(props){
    super(props);
    this.state = { activekey: 1 };
  }

  handleSelect = selectedKey => {
    this.setState({ activekey: selectedKey });
  };

  render(){
    return (
      <Nav bsStyle="tabs" activeKey={this.state.activekey} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
      </Nav>
    );
  }
}

class PillNav extends React.Component {
  constructor(props){
    super(props);
    this.state = { activekey: 1 };
  }

  handleSelect = selectedKey => {
    this.setState({ activekey: selectedKey });
  };

  render(){
    return (
      <Nav bsStyle="pills" activeKey={this.state.activekey} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
        </Nav>
    );
  }
}

class StackedPillNav extends React.Component {
  constructor(props){
    super(props);
    this.state = { activekey: 1 };
  }

  handleSelect = selectedKey => {
    this.setState({ activekey: selectedKey });
  };

  render(){
    return (
      <Nav bsStyle="pills" stacked activeKey={this.state.activekey} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">About</NavItem>
      </Nav>
    );
  }
}

export default NavExample;
