import {
  SHOW_SUCCESS, 
  SHOW_INFO, 
  SHOW_WARNING, 
  SHOW_ERROR, 
  CLOSE_ALL_ALERTS, 
  DESTROY_ALERT
} from './constants';
import { 
  Success, 
  Info, 
  Warning, 
  Error, 
  CloseAll 
} from './types';

const initialState = {
    message: null,
    alertType: null,
};

const AlertReducer = (state = initialState, action) => {
    const { type, message } = action;
    console.log('buoc 2 cap nhat reducer')
    switch (type) {
        case SHOW_SUCCESS: {
            return {
                ...state,
                message,
                alertType: Success
            }
        }
        case SHOW_INFO: {
            return {
                ...state,
                message,
                alertType: Info
            }
        }
        case SHOW_WARNING: {
            return {
                ...state,
                message,
                alertType: Warning
            }
        }
        case CLOSE_ALL_ALERTS: {
            return {
                ...state,
                message: null,
                alertType: CloseAll
            }
        }
        case SHOW_ERROR: {
            return {
                ...state,
                message,
                alertType: Error
            }
        }
        case DESTROY_ALERT:
            return {
                ...state,
                alertType: null,
                message: null
            };
        default:
            return state
    }
}

export default AlertReducer;