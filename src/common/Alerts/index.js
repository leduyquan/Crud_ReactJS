import React, { Component } from 'react';
import Alert from 'react-s-alert';
import PropTypes from 'prop-types';
import * as AlertType from './types';
import { destroyAlert } from './actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../../node_modules/react-s-alert/dist/s-alert-default.css';
import '../../../node_modules/react-s-alert/dist/s-alert-css-effects/scale.css';

class AlertRedux extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Trigger after route is changed, close all current showing alert/notification
    this.props.history.listen(() => {
      this.closeAllAlert();
    });
  }

  componentDidUpdate() {
    const { alertType, message } = this.props;
    switch (alertType) {
      case AlertType.Success:
        this.showSuccess(message || 'Successfully!');
        break;
      case AlertType.Info:
        this.showInfo(message || 'Information!');
        break;
      case AlertType.Warning:
        this.showWarning(message || 'Something wrong happened!');
        break;
      case AlertType.Error:
        this.showError(message || 'Error!');
        break;
      default:
        this.closeAllAlert();
        break;
    }
  }

  showSuccess(message) {
    return Alert.success(message, {
      onClose: this.handleOnAlertClose,
    });
  };

  showInfo (message) {
    return Alert.info(message, {
      onClose: this.handleOnAlertClose,
    });
  };

  showWarning(message) {
    return Alert.warning(message, {
      onClose: this.handleOnAlertClose,
    });
  };

  showError (message){
    return Alert.error(message, {
      onClose: this.handleOnAlertClose,
    });
  };

  closeAllAlert() {
    return Alert.closeAll();
  };

  //Arrow function is to automatically bind this to the function we use to initialize it.
  handleOnAlertClose = () => {
    this.props.destroyAlert();
  };

  render() {
    const { alertType } = this.props;
    return (
      <Alert
        effect='scale'
        stack={true}
        position='top-right'
        timeout={3000} />
    );
  }
}

const mapStateToProps = state => ({
  alertType: state.alertReducer.alertType,
  message: state.alertReducer.message
});

const mapDispatchToProps = dispatch => ({
  destroyAlert: () => dispatch(destroyAlert()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlertRedux));