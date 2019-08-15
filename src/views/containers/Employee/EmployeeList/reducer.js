import {
  FETCH_EMPLOYEE_LIST_START,
  FETCH_EMPLOYEE_LIST_SUCCESS,
  FETCH_EMPLOYEE_LIST_ERROR,
  RESET_STATE_EMPLOYEE_LIST
} from './constants';

const initialState = {
  loadingTable: false,
  employeeData: []
};

const employeeListReducer = (state = initialState, action) => {
  const { type, error, data } = action;
  switch (type) {
    case FETCH_EMPLOYEE_LIST_START:
      return {
        ...state,
        loadingTable: true
      };
    case FETCH_EMPLOYEE_LIST_SUCCESS:
      return {
        ...state,
        loadingTable: false,
        employeeData: data
      };
    case FETCH_EMPLOYEE_LIST_ERROR:
      return {
        ...state,
        loadingTable: false,
        error
      };
    case RESET_STATE_EMPLOYEE_LIST:
      return {
        ...state,
        loadingTable: false,
        employeeData: []
      }
    default:
      return state;
  }
};

export default employeeListReducer;
