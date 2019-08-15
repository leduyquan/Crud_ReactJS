import {
  GET_EMPLOYEE_DETAIL_START,
  GET_EMPLOYEE_DETAIL_SUCCESS,
  GET_EMPLOYEE_DETAIL_ERROR,
  UPDATE_EMPLOYEE_START,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_ERROR,
  RESET_STATE_EMPLOYEE_EDIT
} from './constants';

export const getEmployeeDetailStart = employeeId => ({
  type: GET_EMPLOYEE_DETAIL_START,
  employeeId
});

export const getEmployeeDetailSuccess = employeeDetail => ({
  type: GET_EMPLOYEE_DETAIL_SUCCESS,
  employeeDetail
});

export const getEmployeeDetailError = error => ({
  type: GET_EMPLOYEE_DETAIL_ERROR,
  error
});

export const updateEmployeeStart = (inputData, employeeId) => ({
  type: UPDATE_EMPLOYEE_START,
  inputData,
  employeeId
});

export const updateEmployeeSuccess = () => ({
  type: UPDATE_EMPLOYEE_SUCCESS
});

export const updateEmployeeError = error => ({
  type: UPDATE_EMPLOYEE_ERROR,
  error
});

export const resetStateEmployeeEdit = () => ({
  type: RESET_STATE_EMPLOYEE_EDIT
});