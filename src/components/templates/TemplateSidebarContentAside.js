import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

const TemplateSidebarContentAside = () => {
  return(
    <Grid fluid className="template-page-wrapper page-wrapper__sidebar-content-aside">
        <Col className="sidebar__fixed" sm={2}>
          <Panel>
            <div className="template-sidebar-wrapper sidebar-wrapper__sidebar-content-aside">
              <h3>Vestibulum</h3>
              <p>Donec sed odio dui. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              </p>
              <p>Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.
                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum.
              </p>
              <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a
                pharetra augue. Curabitur blandit tempus porttitor.
              </p>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
            </div>
          </Panel>
        </Col>
        <Col className="content__fluid" sm={10}>
          <Panel>

              <Col lg={9} md={9} sm={12}>
                <div className="template-content-wrapper content-wrapper__sidebar-content-aside">
                  <h1>Sidebar/Content/Aside Layout</h1>

                  <h3>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</h3>
                  <p>Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis.
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Aenean
                    lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.
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

                  <h3>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</h3>
                  <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Cras mattis consectetur purus
                    sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis
                    risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Etiam porta sem
                    malesuada magna mollis euismod.
                  </p>

                  <h3>Donec id elit non mi porta gravida at eget metus.</h3>
                  <p>Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis.
                    Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam
                    eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam
                    porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu
                    leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                  </p>
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget
                    urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                    sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </Col>

              <Col lg={3} md={3} sm={12}>
                <div className="template-aside-wrapper aside-wrapper__sidebar-content-aside">
                <h3>Maecenas faucibus mollis interdum.</h3>
                  <p>Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Aenean
                    eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit.
                  </p>
                  <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                    id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies
                    vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius
                    blandit sit amet non magna.
                  </p>
                  <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis.
                    Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                    venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </Col>

          </Panel>
        </Col>

    </Grid>
  );
};

TemplateSidebarContentAside.propTypes ={};

TemplateSidebarContentAside.defaultProps ={};

export default TemplateSidebarContentAside;
