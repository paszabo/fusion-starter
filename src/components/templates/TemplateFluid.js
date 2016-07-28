import React from 'react';
import { Grid, Row, Navbar, Nav, NavItem } from 'react-bootstrap';

const TemplateFluid = () => {
  const Navigation = (
    <Row className="template-navigation-container">
      <Navbar fluid fixedTop={true} className="template-navigation template-navigation--fluid">
        <Row className="template-navigation__top">

          <Navbar.Brand>
            Fluid Template
          </Navbar.Brand>
          <Nav navbar={false} bsStyle="pills" pullRight>
            <NavItem eventKey={1} >TopNav1</NavItem>
            <NavItem eventKey={2} >TopNav2</NavItem>
          </Nav>
        </Row>

        <Row className="template-navigation__bottom">
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={3} >NavItem 1</NavItem>
              <NavItem eventKey={4} >NavItem 2</NavItem>
              <NavItem eventKey={5} >NavItem 3</NavItem>
              <NavItem eventKey={6} >NavItem 4</NavItem>
              <NavItem eventKey={7} >NavItem 5</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={8} >NavItem 6</NavItem>
              <NavItem eventKey={9} >NavItem 7</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Navbar>
    </Row>
  );

  return(
    <Grid fluid className="template-page-wrapper page-wrapper__fluid">
      {Navigation}

      <div className="template-content-wrapper content-wrapper__fluid">
        <h1>Fluid Page Layout</h1>

        <h3>Pellentesque ornare sem lacinia quam venenatis vestibulum.</h3>
        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus
          auctor fringilla. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus,
          nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Etiam porta sem malesuada magna mollis euismod.
        </p>

        <h3>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</h3>
        <p>Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit
          aliquet. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Aenean
          lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor
          id nibh ultricies vehicula ut id elit. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod.
        </p>

        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum
          at eros. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem
          malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor
          mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
          eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere
          consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.
        </p>

        <h3>Nullam quis risus eget urna mollis ornare vel eu leo.</h3>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
          fringilla. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
          fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
          ut fermentum massa justo sit amet risus.
        </p>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
          amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis p
          arturient montes, nascetur ridiculus mus. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vivamus sagittis lacus vel augue laoreet rutrum
          faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis.
        </p>
      </div>

    </Grid>
  );
};

TemplateFluid.propTypes ={};

TemplateFluid.defaultProps ={};

export default TemplateFluid;
