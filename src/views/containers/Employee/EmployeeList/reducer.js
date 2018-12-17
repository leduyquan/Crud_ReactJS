import {
  FETCH_EMPLOYEE_LIST_START,
  FETCH_EMPLOYEE_LIST_SUCCESS,
  FETCH_EMPLOYEE_LIST_ERROR
} from './constants';

const initialState = {
  employeeData: []
};

const employeeListReducer = (state = initialState, action) => {
  const { type, error, data } = action;
  switch (type) {
    case FETCH_EMPLOYEE_LIST_START:
      return {
        ...state
      };
    case FETCH_EMPLOYEE_LIST_SUCCESS:
      return {

      };
    case FETCH_EMPLOYEE_LIST_ERROR:
      return {
        error,
        employeeData: []
      };
    default:
      return 'df';
  }
};

export default employeeListReducer;