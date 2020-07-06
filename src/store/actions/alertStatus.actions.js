import { AlertStatusActionTypes } from "../actionTypes/alertStatus.actionTypes";

export const setAlertStatus = (alertStatus) => ({
  type: AlertStatusActionTypes.SET_ALERT_STATUS.REQUESTED,
  alertStatus,
});


export const resetAlertStatus = () => ({
  type: AlertStatusActionTypes.RESET_ALERT_STATUS.REQUESTED,
});