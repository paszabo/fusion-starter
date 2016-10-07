import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

const DocumentationPage = () => {
  return (
    <div>
      <PageHeader>Documentation</PageHeader>

      <Panel header='React Styleguide Generator'>

        RSG is a documentation generator for React.

        <ul>
          <li>Renders out components that can be interacted with.</li>
          <li>Uses webpack + hot module replacement to automatically update the guide.</li>
          <li>react-docgen is used under the hood to document component propTypes.</li>
          <li>Can manually + automatically generate code samples w/ syntax highlighting.</li>
        </ul>

        Read more about RSG at {' '}
        <Button bsStyle='link' style={{padding: 0}} target='_blank'
        href='http://theogravity.github.io/react-styleguide-generator-alt'>{'http://theogravity.github.io/react-styleguide-generator-alt'}</Button>.

        <br/><br/>

        <center><img alt="React Style Guide" src={require('../../../assets/images/rsg.png')} style={{maxWidth: 500, maxHeight: 500}} /></center>

      </Panel>

    </div>
  );
};

export default DocumentationPage;
