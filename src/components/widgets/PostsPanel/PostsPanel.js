import React, {PropTypes} from 'react';
import FontAwesome from 'react-fontawesome';
import {Row, Col, Clearfix} from 'react-bootstrap';

class PostsPanel extends React.Component {
  onViewClick = (e) => {
    e.preventDefault();
    this.props.selectPostCategory(this.props.panelLabel);
  };

  render() {
    const {iconName, panelColor, postCount, panelLabel} = this.props;

    return (
      <div className={`posts-panel posts-panel--${panelColor} panel`}>
        <div className={`posts-panel__heading posts-panel__heading--${panelColor} panel-heading`}>
          <Row>
            <Col xs={3}>
              <FontAwesome name={iconName} size='5x'/>
            </Col>
            <Col xs={9} className='text-right'>
              <div className='posts-panel__count'>{postCount}</div>
              <div>New Posts!</div>
            </Col>
          </Row>
        </div>
        <a href='#' className={`posts-panel__link posts-panel__link--${panelColor}`}>
          <div className='posts-panel__footer panel-footer'>
            <span className='pull-left' onClick={this.onViewClick}>View{' '}{panelLabel}</span>
            <span className='pull-right'><FontAwesome name='arrow-circle-right'/></span>
            <Clearfix />
          </div>
        </a>
      </div>
    );
  }
}

PostsPanel.propTypes = {
  iconName: PropTypes.string.isRequired,
  postCount: PropTypes.number.isRequired,
  panelLabel: PropTypes.string.isRequired,
  panelType: PropTypes.string.isRequired,
  panelColor: PropTypes.string.isRequired,
  selectPostCategory: PropTypes.func.isRequired
};

export default PostsPanel;
