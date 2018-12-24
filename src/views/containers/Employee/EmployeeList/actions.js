import {
  FETCH_EMPLOYEE_LIST_START,
  FETCH_EMPLOYEE_LIST_SUCCESS,
  FETCH_EMPLOYEE_LIST_ERROR,
  RESET_STATE_EMPLOYEE_LIST
} from './constants';

export const fetchEmployeeListStart = () => ({
  type: FETCH_EMPLOYEE_LIST_START
})

export const fetchEmployeeListSuccess = data => ({
  type: FETCH_EMPLOYEE_LIST_SUCCESS,
  data
})

export const fetchEmployeeListError = error => ({
  type: FETCH_EMPLOYEE_LIST_ERROR,
  error
});

export const resetStateEmployeeList = () => ({
  type: RESET_STATE_EMPLOYEE_LIST
})