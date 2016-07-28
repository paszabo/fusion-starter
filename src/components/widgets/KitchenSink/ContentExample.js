import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ContentExample = () => {
  return (
    <div>
      <p className="lead">This is a lead paragraph.</p>

      <p>
        This is an <b>ordinary paragraph</b> that is <i>long enough</i>
        to wrap to <u>multiple lines</u> so that you can see how the line
        spacing looks.
      </p>

      <p className="text-muted">Muted color paragraph.</p>
      <p className="text-warning">Warning color paragraph.</p>
      <p className="text-danger">Danger color paragraph.</p>
      <p className="text-info">Info color paragraph.</p>
      <p className="text-success">Success color paragraph.</p>

      <p><small>This is text in a <code>small</code> wrapper. <abbr title="No Big Deal">NBD</abbr>, right?</small></p>

      <hr/>

      <address>
        <strong>Twitter, Inc.</strong><br/>
        795 Folsom Ave, Suite 600<br/>
        San Francisco, CA 94107<br/>
        <abbr title="Phone">P:</abbr> (123) 456-7890
      </address>

      <address className="col-6">
        <strong>Full Name</strong><br/>
        <a href="mailto:#">first.last@example.com</a>
      </address>

      <hr/>

      <blockquote>
        Here&apos;s what a blockquote looks like in Bootstrap.
        <small>Use <code>small</code> to identify the source.</small>
      </blockquote>

      <hr/>

      <Row>
        <Col xs={6}>
          <ul>
            <li>Normal Unordered List</li>
            <li>Can Also Work
              <ul>
                <li>With Nested Children</li>
              </ul>
            </li>
            <li>Adds Bullets to Page</li>
          </ul>
        </Col>
        <Col xs={6}>
          <ol>
            <li>Normal Ordered List</li>
            <li>Can Also Work
              <ol>
                <li>With Nested Children</li>
              </ol>
            </li>
            <li>Adds Bullets to Page</li>
          </ol>
        </Col>
      </Row>

      <hr/>
      <pre>
        function preFormatting() {'{\n'}
        {'  '}let something = somethingElse{';\n'}
        {'  '}return true;{'\n'}
        {'}'}
      </pre>
    </div>
  );
};

export default ContentExample;