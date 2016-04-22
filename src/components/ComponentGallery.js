import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import BootstrapModal from './gallery/BootstrapModalExample';
import DraftJs from './gallery/DraftJsExample';

class ComponentGallery extends React.Component {
  render() {
    return (
      <div>
        <h1>Component Gallery</h1>
        <p>Recommended components:</p>

        <h2><a href="https://facebook.github.io/draft-js/">Draft.js</a></h2>
        <DraftJs/>

        <h2><a href="https://react-bootstrap.github.io">React Bootstrap</a></h2>
        <h3>Button</h3>
        <Button bsStyle="success">Success</Button>

        <h3>Button Group</h3>
        <ButtonGroup>
          <Button>Option 1</Button>
          <Button>Option 2</Button>
          <Button>Option 3</Button>
        </ButtonGroup>

        <h3>Modal</h3>
        <BootstrapModal/>
      </div>
    );
  }
}

export default ComponentGallery;
