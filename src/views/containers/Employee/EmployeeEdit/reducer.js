import {
  GET_EMPLOYEE_DETAIL_START,
  GET_EMPLOYEE_DETAIL_SUCCESS,
  GET_EMPLOYEE_DETAIL_ERROR,
  UPDATE_EMPLOYEE_START,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_ERROR,
  RESET_STATE_EMPLOYEE_EDIT
} from './constants';

const initialState = {
  employeeId: null,
  inputData: null,
  employeeDetail: null
};

const updateEmployeeReducer = (state = initialState, action) => {
  const { type, error, inputData, employeeDetail, employeeId } = action;
  switch (type) {
    case GET_EMPLOYEE_DETAIL_START:
      return {
        ...state,
        employeeId
      }
    case GET_EMPLOYEE_DETAIL_SUCCESS:
      return {
        ...state,
        employeeDetail
      }
    case GET_EMPLOYEE_DETAIL_ERROR:
      return {
        ...state,
        error
      }
    case UPDATE_EMPLOYEE_START:
      return {
        ...state,
        inputData
      }
    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        inputData: null
      }
    case UPDATE_EMPLOYEE_ERROR:
      return {
        ...state,
        error
      }
    case RESET_STATE_EMPLOYEE_EDIT:
      return {
        ...state,
        employeeDetail: null,
        inputData: null,
        employeeData: null
      }
    default:
      return state;
  }
};

export default updateEmployeeReducer;