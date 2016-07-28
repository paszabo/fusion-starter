import React from 'react';
import {PageHeader, Panel, Button} from 'react-bootstrap';

const OtherComponentsPage = () => {
  return (
    <div>
      <PageHeader>Other Components &amp; Tools</PageHeader>

      <Panel header='React Router Bootstrap'>
        <p>Wrap your React-Bootstrap element in a {'<LinkContainer>'} to make it behave like a React Router {'<Link>'}. {' '}
        Check out the GitHub repository for more information {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://github.com/react-bootstrap/react-router-bootstrap'>{'https://github.com/react-bootstrap/react-router-bootstrap'}</Button>.</p>
      </Panel>

      <Panel header='PostCSS'>
        <p>PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables
        and mixins, transpile future CSS syntax, inline images, and more.
        Check out the GitHub repository for more information {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://github.com/postcss/postcss'>{'https://github.com/postcss/postcss'}</Button>.</p>
      </Panel>

      <Panel header='stylelint'>
        <p>A mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.
        Check out the GitHub repository for more information {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://github.com/stylelint/stylelint'>{'https://github.com/stylelint/stylelint'}</Button>.</p>
      </Panel>

      <Panel header='Entypo'>
        <p>A React component for the entypo icon library.
        Check out the GitHub repository for more information {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://github.com/coxautokc/react-entypo'>{'https://github.com/coxautokc/react-entypo'}</Button>.</p>
      </Panel>

      <Panel header='Font Awesome'>
        <p>A React component for the font-awesome icon library.
        Check out the GitHub repository for more information {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://github.com/danawoodman/react-fontawesome'>{'https://github.com/danawoodman/react-fontawesome'}</Button>.</p>
      </Panel>

      <Panel header='React Motion'>
        <p>React animations without jQuery.  Check out the GitHub repository for more information and examples{' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://github.com/chenglou/react-motion'>{'https://github.com/chenglou/react-motion'}</Button>.</p>
      </Panel>

    </div>
  );
};

export default OtherComponentsPage;
