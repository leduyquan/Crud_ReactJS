import EmployeeService from '../../../services/employee.service';
import { isEmpty } from 'lodash';
import { takeEvery, put, call } from 'redux-saga/effects';
/**
 * put: dispatch a action
 * call: call a function
 * select: call a selector function to get data from store (reducer)
 */

import {
  fetchEmployeeListStart,
  fetchEmployeeListSuccess,
  fetchEmployeeListError
} from './EmployeeList/actions';

import {
 FETCH_EMPLOYEE_LIST_START
} from './EmployeeList/constants';

function* fetchEmployeeWorker() {
  try {
    const { getEmployeeList } = EmployeeService;
    const response = yield call([EmployeeService, getEmployeeList]);
    const employeeData = response.data;
    
    yield put(fetchEmployeeListSuccess(employeeData));
  } catch (error) {
    yield put(fetchEmployeeListError(error))
  }
}

const employeeWatchers = [
  takeEvery(FETCH_EMPLOYEE_LIST_START, fetchEmployeeWorker)
];

export default employeeWatchers;