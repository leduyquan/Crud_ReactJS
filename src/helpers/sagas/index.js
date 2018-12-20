import { all } from 'redux-saga/effects';
import employeeWatchers from '../../views/containers/Employee/saga';

export default function* sagas(){
  yield all([
    employeeWatchers
  ]);
}