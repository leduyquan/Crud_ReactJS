import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import sagas from './sagas';
import { createStore, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);