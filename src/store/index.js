import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/item.sagas";
import { itemReducer } from "./reducers";

const reducers = combineReducers({
  itemReducer,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// then run the sagas
sagaMiddleware.run(rootSaga);

export default store;
