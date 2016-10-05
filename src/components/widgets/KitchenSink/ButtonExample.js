import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import EntypoStar from 'react-entypo/lib/entypo/Star';
import EntypoEdit from 'react-entypo/lib/entypo/Edit';
import EntypoCircleWithPlus from 'react-entypo/lib/entypo/CircleWithPlus';
import EntypoInfoWithCircle from 'react-entypo/lib/entypo/InfoWithCircle';
import EntypoHelpWithCircle from 'react-entypo/lib/entypo/HelpWithCircle';
import EntypoCircleWithCross from 'react-entypo/lib/entypo/CircleWithCross';
import EntypoArrowRight from 'react-entypo/lib/entypo/ArrowRight';

const iconStyles = {
  iconOnly : {
    fill:'currentColor',
    verticalAlign:'middle'
  },
  icon : {
    fill:'currentColor',
    verticalAlign:'text-top'
  }
};

const ButtonExample = () => {
  return (
    <div>
      <div style={{marginBottom:12}}>
        <Button bsSize="large">Default</Button>{' '}
        <Button bsSize="large" bsStyle="primary">Primary</Button>{' '}
        <Button bsSize="large" bsStyle="success">Success</Button>{' '}
        <Button bsSize="large" bsStyle="info">Info</Button>{' '}
        <Button bsSize="large" bsStyle="warning">Warning</Button>{' '}
        <Button bsSize="large" bsStyle="danger">Danger</Button>{' '}
        <Button bsSize="large" bsStyle="link">Link</Button>
      </div>
      <div style={{marginBottom:12}}>
        <Button >Default</Button>{' '}
        <Button bsStyle="primary">Primary</Button>{' '}
        <Button bsStyle="success">Success</Button>{' '}
        <Button bsStyle="info">Info</Button>{' '}
        <Button bsStyle="warning">Warning</Button>{' '}
        <Button bsStyle="danger">Danger</Button>{' '}
        <Button bsStyle="link">Link</Button>
      </div>
      <div style={{marginBottom:12}}>
        <Button bsSize="small">Default</Button>{' '}
        <Button bsSize="small" bsStyle="primary">Primary</Button>{' '}
        <Button bsSize="small" bsStyle="success">Success</Button>{' '}
        <Button bsSize="small" bsStyle="info">Info</Button>{' '}
        <Button bsSize="small" bsStyle="warning">Warning</Button>{' '}
        <Button bsSize="small" bsStyle="danger">Danger</Button>{' '}
        <Button bsSize="small" bsStyle="link">Link</Button>
      </div>
      <div style={{marginBottom:12}}>
        <Button bsSize="xsmall">Default</Button>{' '}
        <Button bsSize="xsmall" bsStyle="primary">Primary</Button>{' '}
        <Button bsSize="xsmall" bsStyle="success">Success</Button>{' '}
        <Button bsSize="xsmall" bsStyle="info">Info</Button>{' '}
        <Button bsSize="xsmall" bsStyle="warning">Warning</Button>{' '}
        <Button bsSize="xsmall" bsStyle="danger">Danger</Button>{' '}
        <Button bsSize="xsmall" bsStyle="link">Link</Button>
      </div>
      <div style={{marginBottom:12}}>
        <Button><EntypoStar style={iconStyles.icon}/> Entypo Icons</Button>{' '}
        <Button bsStyle="primary"><EntypoEdit style={iconStyles.iconOnly}/></Button>{' '}
        <Button bsStyle="success"><EntypoCircleWithPlus style={iconStyles.iconOnly}/></Button>{' '}
        <Button bsStyle="info"><EntypoInfoWithCircle style={iconStyles.iconOnly}/></Button>{' '}
        <Button bsStyle="warning"><EntypoHelpWithCircle style={iconStyles.iconOnly}/></Button>{' '}
        <Button bsStyle="danger"><EntypoCircleWithCross style={iconStyles.iconOnly}/></Button>{' '}
        <Button bsStyle="link"><EntypoArrowRight style={iconStyles.iconOnly}/></Button>
      </div>
      {/*
      <div style={{marginBottom:12}}>
        <Button><Glyphicon glyph="star"/> Glyphicons!</Button>{' '}
        <Button bsStyle="primary"><Glyphicon glyph="edit"/></Button>{' '}
        <Button bsStyle="success"><Glyphicon glyph="plus-sign"/></Button>{' '}
        <Button bsStyle="info"><Glyphicon glyph="info-sign"/></Button>{' '}
        <Button bsStyle="warning"><Glyphicon glyph="question-sign"/></Button>{' '}
        <Button bsStyle="danger"><Glyphicon glyph="remove-sign"/></Button>{' '}
        <Button bsStyle="link"><Glyphicon glyph="arrow-right"/></Button>
      </div>
      */}
      <div>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ButtonExample;
