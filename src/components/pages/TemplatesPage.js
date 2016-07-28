import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {PageHeader, Panel, Button} from 'react-bootstrap';

const TemplatesPage = () => {
  return (
    <div>
      <PageHeader>Templates</PageHeader>

      <h3>Page Layouts</h3>
      <p className='lead'>Applications should only use one page alignment overall, to avoid an inconsistent experience.</p>

      {/* Fluid */}
      <Panel header='Fluid'>
        <img style={{float: 'left', margin: '0px 15px 15px 0px', border: '1px solid #c2c1c1', width: 'auto', height: 200}}
          src={require('../../../assets/images/layouts/layout-fluid.png')} />
        <p>
          The fluid page layout provides maximum space for content in all sizes, and leaves control over the size of the UI
          to the user by automatically adjusting to fit the size of their browser. An issue to be aware of is that some types
          of content (like large bodies of text) can become hard to read due to excessively long line lengths if nothing is
          done to mitigate this.
        </p>
        <LinkContainer to={{ pathname: '/template-fluid' }} target='_blank'>
          <Button bsStyle='link' style={{padding: 0}}>
            Example of Fluid Layout
          </Button>
        </LinkContainer>
      </Panel>

      {/* Fixed width */}
      <Panel header='Fixed width'>
        <img style={{float: 'left', margin: '0px 15px 15px 0px', border: '1px solid #c2c1c1', width: 'auto', height: 200}}
          src={require('../../../assets/images/layouts/layout-fixed.png')} />
        <p>
        The fixed width page layout deliberately constrains the overall width of the content and horizontally centers it
        on the page. This gives the designer more control and can be useful for when a more predictable layout with easy to
        read line lengths are needed. Conversely, it constrains the amount of space available to content and takes away
        control over presentation from the user.
        </p>
        <LinkContainer to={{ pathname: '/template-fixed' }} target='_blank'>
          <Button bsStyle='link' style={{padding: 0}}>
            Example of Fixed Layout
          </Button>
        </LinkContainer>
      </Panel>

      {/* Hybrid */}
      <Panel header='Hybrid'>
        <img style={{float: 'left', margin: '0px 15px 15px 0px', border: '1px solid #c2c1c1', width: 'auto', height: 200}}
          src={require('../../../assets/images/layouts/layout-hybrid.png')} />
        <p>
        The hybrid page layout combines the fluid design for the application header with a fixed width design for the rest of
        the content area. It should only be used in cases where a fixed width page layout is desirable but where the application
        header might contain a large number of items. Different structures can be applied to the main content area of a page to
        suit different purposes.
        </p>
        <LinkContainer to={{ pathname: '/template-hybrid' }} target='_blank'>
          <Button bsStyle='link' style={{padding: 0}} href='/template-hybrid'>
            Example of Hybrid Layout
          </Button>
        </LinkContainer>
      </Panel>


      <h3>Custom Layouts</h3>
      <p className='lead'>To accelerate development, the following layout templates are available for applications.</p>

      {/* Content Only */}
      <Panel header='Content Only'>
        <img style={{float: 'left', margin: '0px 15px 15px 0px', border: '1px solid #c2c1c1', width: 'auto', height: 200}}
          src={require('../../../assets/images/layouts/content-content.png')} />
        <p>
        The content only layout maximizes the space available for content. It provides more horizontal space than the other
        layouts, and is therefore ideal for displaying wide tables and other large user interface elements. Conversely, it does
        not provide any structure for grouping and separating elements.
        </p>
        <LinkContainer to={{ pathname: '/template-content-only' }} target='_blank'>
          <Button bsStyle='link' style={{padding: 0}}>
            Example of Content Only Layout
          </Button>
        </LinkContainer>
      </Panel>

      {/* Sidebar and Content */}
      <Panel header='Sidebar and Content'>
        <img style={{float: 'left', margin: '0px 15px 15px 0px', border: '1px solid #c2c1c1', width: 'auto', height: 200}}
          src={require('../../../assets/images/layouts/content-content-sidebar.png')} />
        <p>
        The sidebar and content layout has a column for vertical navigation to the left of the content area, which is useful
        for when a long list of navigation links is necessary.
        </p>
        <LinkContainer to={{ pathname: '/template-sidebar-content' }} target='_blank'>
          <Button bsStyle='link' style={{padding: 0}}>
            Example of Sidebar/Content Layout
          </Button>
        </LinkContainer>
      </Panel>

      {/* Content and Aside */}
      <Panel header='Content and Aside'>
        <img style={{float: 'left', margin: '0px 15px 15px 0px', border: '1px solid #c2c1c1', width: 'auto', height: 200}}
          src={require('../../../assets/images/layouts/content-content-aside.png')} />
        <p>
        The content and aside layout has a column to the right of the content area. The sidebar is used for supplementary
        content, which would otherwise interrupt the flow of content in the main content area.
        </p>
        <LinkContainer to={{ pathname: '/template-content-aside' }} target='_blank'>
          <Button bsStyle='link' style={{padding: 0}}>
            Example of Content/Aside Layout
          </Button>
        </LinkContainer>
      </Panel>

      {/* Sidebar, Content and Aside */}
      <Panel header='Sidebar, Content and Aside'>
        <img style={{float: 'left', margin: '0px 15px 15px 0px', border: '1px solid #c2c1c1', width: 'auto', height: 200}}
          src={require('../../../assets/images/layouts/content-content-sidebar-aside.png')} />
        <p>
        The sidebar, content and aside layout is a combination of the three layouts mentioned above. This layout can be used
        when a vertical navigation is required as well as a two column structure in the content area.
        </p>
        <LinkContainer to={{ pathname: '/template-sidebar-content-aside' }} target='_blank'>
          <Button bsStyle='link' style={{padding: 0}} >
            Example of Sidebar/Content/Aside Layout
          </Button>
        </LinkContainer>
      </Panel>

      {/* Focused Task */}
      <Panel header='Focused Task'>
        <img style={{float: 'left', margin: '0px 15px 15px 0px', border: '1px solid #c2c1c1', width: 'auto', height: 200}}
          src={require('../../../assets/images/layouts/content-focused.png')} />
        <p>
        The focused task layout has a smaller, fixed width content area that is horizontally centered on the page regardless
        of which page alignment is applied.
        </p>
        <LinkContainer to={{ pathname: '/template-focused' }} target='_blank'>
          <Button bsStyle='link' style={{padding: 0}}>
            Example of Focused Task Layout
          </Button>
        </LinkContainer>
      </Panel>

    </div>
  );
};

export default TemplatesPage;
