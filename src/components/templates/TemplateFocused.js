import React from 'react';
import { Grid, Panel } from 'react-bootstrap';

const TemplateFocused = () => {
  return(
    <Grid className="template-focus-wrapper page-wrapper__focus">
      <Panel className="content-wrapper__focus">
        <h1>Focused Task</h1>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.
          Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      </Panel>
    </Grid>
  );
};

TemplateFocused.propTypes ={};

TemplateFocused.defaultProps ={};

export default TemplateFocused;
