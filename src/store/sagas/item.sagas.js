import { all, call, put, takeLatest } from "redux-saga/effects"; //takeEvery
import { ItemActionTypes } from "../actionTypes/item.actionTypes";
import { AlertStatusActionTypes } from "../actionTypes/alertStatus.actionTypes";
import { AlertStatus } from "../../objects/";
import Api from "../../services/item.service";

// worker Saga: will be fired on GET_ALL_ITEMS.REQUESTED actions
function* getAllItems() {
  try {
    const response = yield call(Api.getAll);
    yield put({ type: ItemActionTypes.GET_ALL_ITEMS.SUCCEEDED, items: response.data });
  } catch (e) {
    yield put({
      type: ItemActionTypes.GET_ALL_ITEMS.FAILED,
      errorMessage: e.message,
    });
  }
}

// worker Saga: will be fired on GET_ITEM.REQUESTED actions
function* getItem(action) {
  try {
    const response = yield call(Api.get, action.itemId);
    yield put({ type: ItemActionTypes.GET_ITEM.SUCCEEDED, item: response.data });
  } catch (e) {
    yield put({ type: ItemActionTypes.GET_ITEM.FAILED, errorMessage: e.message });
  }
}

// worker Saga: will be fired on CREATE_ITEM.REQUESTED actions
function* createItem(action) {
  try {
    const response = yield call(Api.create, action.item);
    yield put({ type: ItemActionTypes.CREATE_ITEM.SUCCEEDED, item: response.data });
    yield put({ type: AlertStatusActionTypes.SET_ALERT_STATUS.SUCCEEDED, alertStatus: AlertStatus.AlertStatuses.CREATE_ITEM.SUCCESS });
  } catch (e) {
    yield put({ type: ItemActionTypes.CREATE_ITEM.FAILED, errorMessage: e.message });
    yield put({ type: AlertStatusActionTypes.SET_ALERT_STATUS.FAILED, alertStatus: AlertStatus.AlertStatuses.CREATE_ITEM.FAILURE });
  }
}

// worker Saga: will be fired on UPDATE_ITEM.REQUESTED actions
function* updateItem(action) {
  try {
    yield call(Api.update, action.item.id, action.item);
    yield put({ type: ItemActionTypes.UPDATE_ITEM.SUCCEEDED, item: action.item });
    yield put({ type: AlertStatusActionTypes.SET_ALERT_STATUS.SUCCEEDED, alertStatus: AlertStatus.AlertStatuses.UPDATE_ITEM.SUCCESS });
  } catch (e) {
    yield put({ type: ItemActionTypes.UPDATE_ITEM.FAILED, errorMessage: e.message });
    yield put({ type: AlertStatusActionTypes.SET_ALERT_STATUS.FAILED, alertStatus: AlertStatus.AlertStatuses.UPDATE_ITEM.FAILURE });
  }
}

// worker Saga: will be fired on DELETE_ITEM.REQUESTED actions
function* deleteItem(action) {
  try {
    yield call(Api.delete, action.itemId);
    yield put({
      type: ItemActionTypes.DELETE_ITEM.SUCCEEDED,
      itemId: action.itemId,
    });
    yield put({ type: AlertStatusActionTypes.SET_ALERT_STATUS.SUCCEEDED, alertStatus: AlertStatus.AlertStatuses.DELETE_ITEM.SUCCESS });
  } catch (e) {
    yield put({ type: ItemActionTypes.DELETE_ITEM.FAILED, errorMessage: e.message });
    yield put({ type: AlertStatusActionTypes.SET_ALERT_STATUS.FAILED, alertStatus: AlertStatus.AlertStatuses.DELETE_ITEM.FAILURE });
  }
}

// worker Saga: will be fired on DELETE_ALL_ITEM.REQUESTED actions
function* deleteAllItems() {
  try {
    yield call(Api.deleteAll);
    yield put({ type: ItemActionTypes.DELETE_ALL_ITEMS.SUCCEEDED });
    yield put({ type: AlertStatusActionTypes.SET_ALERT_STATUS.SUCCEEDED, alertStatus: AlertStatus.AlertStatuses.DELETE_ALL_ITEMS.SUCCESS });
  } catch (e) {
    yield put({
      type: ItemActionTypes.DELETE_ALL_ITEMS.FAILED,
      errorMessage: e.message,
    });
    yield put({ type: AlertStatusActionTypes.SET_ALERT_STATUS.FAILED, alertStatus: AlertStatus.AlertStatuses.DELETE_ALL_ITEMS.FAILURE });
  }
}

// worker Saga: will be fired on DELETE_ALL_ITEM.REQUESTED actions
function* findItemByTitle(action) {
  try {
    const response = yield call(Api.findByTitle, action.searchTitle);
    yield put({ type: ItemActionTypes.FIND_BY_TITLE.SUCCEEDED, items: response.data });
  } catch (e) {
    yield put({
      type: ItemActionTypes.FIND_BY_TITLE.FAILED,
      errorMessage: e.message,
    });
  }
}

/*
  Starts fetchItem on each dispatched `GET_ALL_ITEMS.REQUESTED` action.
  Allows concurrent fetches of item.
*/
// function* mySagas() {
//   yield takeEvery(ItemActionTypes.GET_ALL_ITEMS.REQUESTED, getAllItems);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent gets of item. If "GET_ALL_ITEMS.REQUESTED" gets
  dispatched while a get is already pending, that pending get is cancelled
  and only the latest one will be run.
*/
function* mySagas() {
  yield takeLatest(ItemActionTypes.GET_ALL_ITEMS.REQUESTED, getAllItems);
  yield takeLatest(ItemActionTypes.GET_ITEM.REQUESTED, getItem);
  yield takeLatest(ItemActionTypes.CREATE_ITEM.REQUESTED, createItem);
  yield takeLatest(ItemActionTypes.UPDATE_ITEM.REQUESTED, updateItem);
  yield takeLatest(ItemActionTypes.DELETE_ITEM.REQUESTED, deleteItem);
  yield takeLatest(ItemActionTypes.DELETE_ALL_ITEMS.REQUESTED, deleteAllItems);
  yield takeLatest(ItemActionTypes.FIND_BY_TITLE.REQUESTED, findItemByTitle);
}

function* rootSaga() {
  yield all([mySagas()]);
}

export default rootSaga;
