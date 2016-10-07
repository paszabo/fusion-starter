import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

const AnimationPage = () => {
  return (
    <div>
      <PageHeader>Animation</PageHeader>

      <Panel header='React Motion'>
        <p>React animations without jQuery.  Check out the GitHub repository for more information and examples{' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='https://github.com/chenglou/react-motion'>{'https://github.com/chenglou/react-motion'}</Button>.</p>
      </Panel>

    </div>
  );
};

export default AnimationPage;
