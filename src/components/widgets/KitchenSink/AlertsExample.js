/* eslint-disable react/no-multi-comp */
import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';

const AlertExample = () => {
  return (
    <div>
      <Alert bsStyle="danger">
        <strong>Oh snap!</strong> <a href="#" className="alert-link">Change a few things up</a> and try submitting
        again.
      </Alert>

      <Alert bsStyle="success">
        <strong>Well done!</strong> You successfully read <a href="#" className="alert-link">this important alert
        message</a>.
      </Alert>

      <Alert bsStyle="warning">
        <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your attention</a>, but it&apos;s
        not super important.
      </Alert>

      <Alert bsStyle="info">
        <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your attention</a>, but it&apos;s
        not super important.
      </Alert>

      <DismissableAlert />

    </div>
  );
};

class DismissableAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {alertVisible: true};
  }

  handleAlertDismiss = () => {
    this.setState({alertVisible: false});
  };

  /*
   This alert on Tracksuit's Kitchen Sink is invalid as it does not list a bsStyle, resulting in a non-styled alert.  "bsStyle" must have one of
   "danger","success","warning","info". Defaults to "info".  Consult on expectations and usage.
   */

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="warning" onDismiss={this.handleAlertDismiss}>
          <h4>Warning!</h4>
          <p>This is a block style alert.</p>
        </Alert>
      );
    } else {
      return (
        null
      );
    }
  }
}

export default AlertExample;
