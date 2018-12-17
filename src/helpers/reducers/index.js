import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
  form: formReducer
});

const rootReducer = () => {
  return appReducer();
}

export default rootReducer;