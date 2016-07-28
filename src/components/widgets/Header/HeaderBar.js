import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import HeaderBarUserTitle from './HeaderBarUserTitle';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    // Todo...
  }

  render() {
    return (
      <Navbar fluid={true} staticTop={true} navExpanded={false} onToggle={this.toggleNav} className='header-bar'>

        {/* Header Branding */}
        <Navbar.Header className='header-bar__nav-header'>
          <Navbar.Brand className='header-bar__nav-brand'>
            <a href='#'>
             <img className='header-bar__nav-logo' src={require('../../../../assets/images/fusion-icon.png')} />
              Fusion
            </a>
          </Navbar.Brand>
        </Navbar.Header>

        {/* Header Dropdowns */}
        <Nav pullRight className='header-bar__nav-right'>

          {/* Messages */}
          <NavDropdown eventKey={1} title={<FontAwesome name='envelope' fixedWith={true} />} className='header-bar__dropdown'
            id='header-bar__envelope-dropdown'>
            <MenuItem eventKey={1.1}>
              <div className='header-bar__envelope-navitem'>
                <strong>Jeff Brown</strong>
                <span className="pull-right text-muted">
                  <em>12 minutes ago</em>
                </span>
              </div>
              <div className='header-bar__envelope-preview'>Hello Jeff, I thought I would reach out to you regarding our earlier...</div>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.2}>
              <div className='header-bar__envelope-navitem'>
                <strong>Jeff Brown</strong>
                <span className="pull-right text-muted">
                  <em>22 minutes ago</em>
                </span>
              </div>
              <div className='header-bar__envelope-preview'>Hi Jeff! I am glad that you got my call on time!  Do you have time to...</div>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.3}>
              <div className='header-bar__envelope-navitem'>
                <strong>Jeff Brown</strong>
                <span className="pull-right text-muted">
                  <em>37 minutes ago</em>
                </span>
              </div>
              <div className='header-bar__envelope-preview'>Jeff, This evening I will need to step out for a bit but once I...</div>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.4}>
              <div className='header-bar__envelope-navitem text-center'>
                {' '}
                <strong>Read All Messages</strong>
                {' '}
                <FontAwesome
                  name='angle-right'
                  fixedWith={true}
                />
              </div>
            </MenuItem>
          </NavDropdown>

          {/* Alerts */}
          <NavDropdown eventKey={2} title={<FontAwesome name='bell' fixedWith={true} />} className='header-bar__dropdown'
            id='header-bar__bell-dropdown'>
            <MenuItem eventKey={2.1}>
              <div className='header-bar__bell-navitem'>
                <FontAwesome
                  name='comment'
                  fixedWith={true}
                />
                {' '}
                New Comment
                {' '}
                <span className="pull-right text-muted small">3 minutes ago</span>
              </div>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.2}>
              <div className='header-bar__bell-navitem'>
                <FontAwesome
                  name='envelope'
                  fixedWith={true}
                />
                {' '}
                Message Sent
                {' '}
                <span className="pull-right text-muted small">8 minutes ago</span>
              </div>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.3}>
              <div className='header-bar__bell-navitem'>
              <FontAwesome
                  name='tasks'
                  fixedWith={true}
                />
                {' '}
                New Task
                {' '}
                <span className="pull-right text-muted small">12 minutes ago</span>
              </div>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.4}>
              <div className='header_bar__bell-navitem'>
                <FontAwesome
                  name='upload'
                  fixedWith={true}
                />
                {' '}
                File Sent
                {' '}
                <span className="pull-right text-muted small">19 minutes ago</span>
              </div>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>
              <div className='header-bar__bell-navitem text-center'>
                {' '}
                <strong>See All Alerts</strong>
                {' '}
                <FontAwesome
                  name='angle-right'
                  fixedWith={true}
                />
              </div>
            </MenuItem>
          </NavDropdown>

          {/* User */}
          <NavDropdown eventKey={3} title={<HeaderBarUserTitle userName='Robert Brown'/>} className='header-bar__dropdown'
            id='header-bar__user-dropdown'>
            <MenuItem eventKey={3.1}>
              <FontAwesome
                name='user'
                fixedWith={true}
              />
              {' '}
              User Profile
            </MenuItem>
            <MenuItem eventKey={3.2}>
              <FontAwesome
                name='gear'
                fixedWith={true}
              />
              {' '}
              Settings
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>
              <FontAwesome
                name='sign-out'
                fixedWith={true}
              />
              {' '}
              Logout
            </MenuItem>
          </NavDropdown>

        </Nav>

      </Navbar>
    );
  }
}

export default HeaderBar;
