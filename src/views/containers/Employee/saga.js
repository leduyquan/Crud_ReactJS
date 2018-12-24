import EmployeeService from '../../../services/employee.service';
import { isEmpty } from 'lodash';
import { takeEvery, put, call } from 'redux-saga/effects';
/**
 * put: dispatch a action
 * call: call a function
 * select: call a selector function to get data from store (reducer)
 */

import {
createEmployeeSuccess,
createEmployeeError
} from './EmployeeEntry/actions';

import {
  fetchEmployeeListSuccess,
  fetchEmployeeListError
} from './EmployeeList/actions';

import {
 CREATE_EMPLOYEE_START
} from './EmployeeEntry/constants';

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

function* createEmployeeWorker(action) {
  try {
    const { createEmployee } = EmployeeService;

    const body = {
      ...action.inputData
    }

    yield call([EmployeeService, createEmployee], body);
    yield put(createEmployeeSuccess());
  } catch (error) {
    yield put(fetchEmployeeListError(error))
  }
}

const employeeWatchers = [
  takeEvery(FETCH_EMPLOYEE_LIST_START, fetchEmployeeWorker),
  takeEvery(CREATE_EMPLOYEE_START, createEmployeeWorker)
];

export default employeeWatchers;