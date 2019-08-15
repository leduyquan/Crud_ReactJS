import {
  CREATE_EMPLOYEE_START,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_ERROR,
  RESET_STATE_EMPLOYEE_ENTRY
} from './constants';

export const createEmployeeStart = inputData => ({
  type: CREATE_EMPLOYEE_START,
  inputData
});

export const createEmployeeSuccess = () => ({
  type: CREATE_EMPLOYEE_SUCCESS
});

export const createEmployeeError = error => ({
  type: CREATE_EMPLOYEE_ERROR,
  error
});

export const resetStateEmployeeEntry = () => ({
  type: RESET_STATE_EMPLOYEE_ENTRY
});