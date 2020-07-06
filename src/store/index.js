import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import {
  alertStatusReducer,
  itemReducer,
} from "./reducers";

const reducers = combineReducers({
  alertStatusReducer,
  itemReducer,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware(rootSaga);

// mount it on the Store
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// then run the sagas
sagaMiddleware.run(rootSaga);

export default store;
