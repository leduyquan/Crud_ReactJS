import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import employeeListReducer from '../../views/containers/Employee/EmployeeList/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  employeeListReducer
});

// const rootReducer = (state,action) => {
//   return appReducer(state,action);
// }

export default rootReducer;