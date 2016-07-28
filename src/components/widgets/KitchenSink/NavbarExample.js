/* eslint-disable react/no-multi-comp */
import React from 'react';
import {Nav, NavItem, Navbar, Button} from 'react-bootstrap';

const NavExample = () => {
  return (
    <div>
      <NavbarDefault />
      <br/>
      <NavbarInverse />
      <br/>
      <Navbar fluid style={{border: 'none', background: 'none transparent'}}>
        <Navbar.Collapse>
          <Button bsStyle="primary" href="#" className="navbar-btn">Navbar Button</Button>
          <Navbar.Text pullRight>Navbar Text</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

// Separate Navbar examples broken down to use their individual states to change active nav items.

class NavbarDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activekey: 1};
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({activekey: selectedKey});
  }

  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Your Company</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight activeKey={this.state.activekey} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
          <NavItem eventKey={3} href="#">Contact</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

class NavbarInverse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activekey: 1};
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({activekey: selectedKey});
  }

  render() {
    return (
      <Navbar inverse fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Your Company</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight activeKey={this.state.activekey} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
          <NavItem eventKey={3} href="#">Contact</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavExample;
