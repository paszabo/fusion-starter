/* eslint-disable react/no-multi-comp */
import React from 'react';
import {PageHeader, Panel, Well, Button} from 'react-bootstrap';

// TODO: Replace with actual implementation and remove iframe...
const RTEFrame = () => (
  <div>
    <iframe
      style={{border: 'none'}}
      width="600" height="390"
      src={`https://coxautokc.github.io/react-richtext/`}
    />
  </div>
);

const RichTextEditorPage = () => {
  return (
    <div>
      <PageHeader>Rich Text Editor <small>Draft.js</small></PageHeader>

      <Panel>
        <center><RTEFrame /></center>

        <Well>
          <h4>Draft.js Usage Information</h4>

          <p>Draft.js is a framework for building rich text editors in React, powered by an immutable model and abstracting over cross-browser differences.
          Draft.js makes it easy to build any type of rich text input, whether you are just looking to support a few inline text styles or building a complex
          text editor for composing long-form articles. For complete documentation on Draft.js, visit the Facebook{"'"}s Draft.js website
          at <Button bsStyle='link' style={{padding: 0}} target='_blank' href='https://facebook.github.io/draft-js/'>{'https://facebook.github.io/draft-js/'}</Button>.</p>

          <Button bsSize='large' target='_blank' block href='https://facebook.github.io/draft-js/'>View Draft.js Documentation</Button>
        </Well>
      </Panel>

    </div>
  );
};

export default RichTextEditorPage;
/* eslint-enable react/no-multi-comp */
