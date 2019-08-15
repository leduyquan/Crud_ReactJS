import {
  SHOW_SUCCESS, 
  SHOW_INFO, 
  SHOW_WARNING, 
  SHOW_ERROR, 
  CLOSE_ALL_ALERTS, 
  DESTROY_ALERT
} from './constants';

const showSuccess = message => ({
  type: SHOW_SUCCESS,
  message
});

const showInfo = message => ({
  type: SHOW_INFO,
  message
});

const showWarning = message => ({
  type: SHOW_WARNING,
  message
});

const showError = message => ({
  type: SHOW_ERROR,
  message
});

export const closeAllAlerts = () => ({
  type: CLOSE_ALL_ALERTS
});

export const destroyAlert = () => ({
  type: DESTROY_ALERT
});

export const alertActions = {
  showSuccess,
  showInfo,
  showWarning,
  showError
};