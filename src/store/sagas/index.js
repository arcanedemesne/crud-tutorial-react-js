import { all } from "redux-saga/effects";

import ItemSaga from "./item.sagas";
import AlertStatusSaga from "./alertStatus.sagas";

function* rootSaga() {
  yield all([ItemSaga(), AlertStatusSaga()]);
}

export default rootSaga;
