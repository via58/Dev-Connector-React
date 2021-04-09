import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  let alertDiv = alerts.map((alert) => {
    return (
      <div
        id={alert.id}
        key={alert.id}
        className={`alert alert-${alert.alertType}`}
      >
        {alert.msg}
      </div>
    );
  });
  return <Fragment>{alertDiv}</Fragment>;
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};
const mapStateToProp = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProp)(Alert);
