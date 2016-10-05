import React, {PropTypes} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProgressBar from 'react-progress-bar-plus';
import * as loadingIndicatorActions from '../../../actions/loadingIndicatorActions';

class LoadingIndicator extends React.Component {
  start = () => {
    const interval = (Math.random() * (0.5 - 0.2) + 0.2 ) * 100;
    this.props.actions.loadingIndicatorStart(interval);
  };

  setPercentage = (e) => {
    const percent = parseInt(e.target.value, 10);
    this.props.actions.loadingIndicatorSetPrecent(percent);
  };

  renderProgressBar() {
    const status = this.props.loadingIndicatorStatus;

    return (
      <div className='react-progress-bar-position-relative'>
        <ProgressBar
          style={{position: 'relative'}}
          percent={status.percent}
          autoIncrement={true}
          intervalTime={status.intervalTime}
          spinner={false}
        />
      </div>
    );
  }

  render() {
    const progressBar = this.renderProgressBar();

    return (
      <div>
        {progressBar}
        <Panel>
          <h4>
            {' '}
          </h4>
          <ButtonToolbar className='react-progress-bar-toolbar'>
            <Button bsStyle='primary'
                    value={0}
                    onClick={this.start}
            >
              Start
            </Button>
            <Button bsStyle='primary'
                    value={25}
                    onClick={this.setPercentage}
            >
              Set 25
            </Button>
            <Button bsStyle='primary'
                    value={50}
                    onClick={this.setPercentage}
            >
              Set 50
            </Button>
            <Button bsStyle='primary'
                    value={75}
                    onClick={this.setPercentage}
            >
              Set 75
            </Button>
            <Button bsStyle='success'
                    value={100}
                    onClick={this.setPercentage}
            >
              Finish
            </Button>
          </ButtonToolbar>
        </Panel>
      </div>
    );
  }
}

LoadingIndicator.propTypes = {
  actions: PropTypes.object.isRequired,
  loadingIndicatorStatus: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    loadingIndicatorStatus: state.loadingIndicatorStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loadingIndicatorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingIndicator);
