import { AlertStatusActionTypes } from "../actionTypes/alertStatus.actionTypes";
import { AlertStatus } from "../../objects";

const initialState = {
  alertStatus: new AlertStatus.DefaultAlertStatus(),
};

export function alertStatusReducer(state = initialState, action) {
  switch (action.type) {
    case AlertStatusActionTypes.SET_ALERT_STATUS.SUCCEEDED:
      return setAlertStatus(state, action);
    case AlertStatusActionTypes.RESET_ALERT_STATUS.SUCCEEDED:
      return resetAlertStatus(state);
    default:
      return state;
  }
}

function setAlertStatus(state, action) {
  return Object.assign({}, state, {
    alertStatus: action.alertStatus,
  });
}

function resetAlertStatus(state) {
  return Object.assign({}, state, {
    alertStatus: new AlertStatus.DefaultAlertStatus(),
  });
}
