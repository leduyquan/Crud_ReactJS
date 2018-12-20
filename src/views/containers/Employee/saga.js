import { takeEvery, put } from 'redux-saga/effects';
import { isEmpty } from 'lodash';

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
    const sortedEvent = [
      {
        name: 'fs',
        address: 'fd',
        position: 'fdsjh',
        salary: 'layyfdsa'
      },
      {
        name: 'fs',
        address: 'fd',
        position: 'fdsjh',
        salary: 'fsakjfsda'
      },
    ]
    
    yield put(fetchEmployeeListSuccess(sortedEvent));
  } catch (error) {
    yield put(fetchEmployeeListError(error))
  }
}

const employeeWatchers = [
  takeEvery(FETCH_EMPLOYEE_LIST_START, fetchEmployeeWorker)
];

export default employeeWatchers;