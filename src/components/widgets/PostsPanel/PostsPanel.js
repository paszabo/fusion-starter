import React, {PropTypes} from 'react';
import FontAwesome from 'react-fontawesome';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recentPostsActions from '../../../actions/recentPostsActions';

const recentPostData = require('../../../data/recentPosts').recentPosts;

class PostsPanel extends React.Component {
  setRecentPosts = () => {
    this.props.actions.setRecentPosts(this.props.recentPosts, recentPostData[this.props.panelType]);
  };

  render () {
    return (
      <div className={`posts-panel posts-panel--${this.props.panelColor} panel`}>
        <div className={`posts-panel__heading posts-panel__heading--${this.props.panelColor} panel-heading`}>
          <Row>
            <Col xs={3}>
              <FontAwesome name={this.props.iconName} size='5x' />
            </Col>
            <Col xs={9} className='text-right'>
              <div className='posts-panel__count'>{this.props.postCount}</div>
              <div>New Posts!</div>
            </Col>
          </Row>
        </div>
        <a href='#' className={`posts-panel__link posts-panel__link--${this.props.panelColor}`}>
          <div className='posts-panel__footer panel-footer'>
            <span className='pull-left' onClick={this.setRecentPosts}>View{' '}{this.props.panelLabel}</span>
            <span className='pull-right'><FontAwesome name='arrow-circle-right' /></span>
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
  actions: PropTypes.object.isRequired,
  recentPosts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    recentPosts: state.recentPosts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recentPostsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPanel);
