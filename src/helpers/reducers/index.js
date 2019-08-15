import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import employeeEntryReducer from '../../views/containers/Employee/EmployeeEntry/reducer';
import employeeEditReducer from '../../views/containers/Employee/EmployeeEdit/reducer';
import employeeListReducer from '../../views/containers/Employee/EmployeeList/reducer';
import alertReducer from '../../common/Alerts/reducer';
import modalReducer from '../../common/Modal/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  alertReducer,
  modalReducer,
  employeeEntryReducer,
  employeeEditReducer,
  employeeListReducer
});

// const rootReducer = (state,action) => {
//   return appReducer(state,action);
// }

export default rootReducer;