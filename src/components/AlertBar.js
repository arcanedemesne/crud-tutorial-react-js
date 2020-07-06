import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Alert } from "shards-react";

import { resetAlertStatus } from "../store/actions/alertStatus.actions";

class AlertBar extends PureComponent {

  render() {
    const { alertStatus, actions } = this.props;

    return (
      <Alert
        fade={true}
        dismissible={actions.resetAlertStatus}
        open={alertStatus.open}
        theme={alertStatus.theme}
      >
        <b>{alertStatus.message}</b>
      </Alert>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  const { alertStatusReducer } = state;
  return {
    alertStatus: alertStatusReducer.alertStatus,
  };
};

const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
    actions: bindActionCreators(
      {
        resetAlertStatus,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertBar);
