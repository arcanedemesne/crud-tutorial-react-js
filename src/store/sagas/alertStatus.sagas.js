import { all, put, takeLatest } from "redux-saga/effects";
import { AlertStatusActionTypes } from "../actionTypes/alertStatus.actionTypes";

function* setAlertStatus(action) {
  try {
    yield put({ type: AlertStatusActionTypes.SET_ALERT_STATUS.SUCCEEDED, alertStatus: action.alertStatus });
  } catch (e) {
    yield put({
      type: AlertStatusActionTypes.SET_ALERT_STATUS.FAILED,
      errorMessage: e.message,
    });
  }
}

function* resetAlertStatus() {
  try {
    yield put({ type: AlertStatusActionTypes.RESET_ALERT_STATUS.SUCCEEDED });
  } catch (e) {
    yield put({
      type: AlertStatusActionTypes.RESET_ALERT_STATUS.FAILED,
      errorMessage: e.message,
    });
  }
}

function* mySagas() {
  yield takeLatest(AlertStatusActionTypes.SET_ALERT_STATUS.REQUESTED, setAlertStatus);
  yield takeLatest(AlertStatusActionTypes.RESET_ALERT_STATUS.REQUESTED, resetAlertStatus);
}

function* rootSaga() {
  yield all([mySagas()]);
}

export default rootSaga;
