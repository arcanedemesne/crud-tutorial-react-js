import { ItemActionTypes } from "../actionTypes/item.actionTypes";

export const getAllItems = () => ({
  type: ItemActionTypes.GET_ALL_ITEMS.REQUESTED,
});

export const getItem = (itemId) => ({
  type: ItemActionTypes.GET_ITEM.REQUESTED,
  itemId,
});

export const setItem = (item) => ({
  type: ItemActionTypes.SET_ITEM.SUCCEEDED,
  item,
});

export const createItem = (item) => ({
  type: ItemActionTypes.CREATE_ITEM.REQUESTED,
  item,
});

export const updateItem = (item) => ({
  type: ItemActionTypes.UPDATE_ITEM.REQUESTED,
  item,
});

export const deleteItem = (itemId) => ({
  type: ItemActionTypes.DELETE_ITEM.REQUESTED,
  itemId,
});

export const deleteAllItems = () => ({
  type: ItemActionTypes.DELETE_ALL_ITEMS.REQUESTED,
});

export const findByTitle = (searchTitle) => ({
  type: ItemActionTypes.FIND_BY_TITLE.REQUESTED,
  searchTitle,
});
