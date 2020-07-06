import { ItemActionTypes } from "../actionTypes/item.actionTypes";
import { Item } from "../../objects";

const initialState = {
  currentItem: new Item(),
  items: [],
  errorMessage: null,
};

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ItemActionTypes.GET_ALL_ITEMS.SUCCEEDED:
      return getAllItems(state, action);
    case ItemActionTypes.GET_ITEM.SUCCEEDED:
      return getItem(state, action);
    case ItemActionTypes.SET_ITEM.SUCCEEDED:
      return setItem(state, action);
    case ItemActionTypes.CREATE_ITEM.SUCCEEDED:
      return createItem(state, action);
    case ItemActionTypes.UPDATE_ITEM.SUCCEEDED:
      return updateItem(state, action);
    case ItemActionTypes.DELETE_ITEM.SUCCEEDED:
      return deleteItem(state, action);
    case ItemActionTypes.DELETE_ALL_ITEMS.SUCCEEDED:
      return deleteAllItems(state, action);
    case ItemActionTypes.FIND_BY_TITLE.SUCCEEDED:
      return findItemByTitle(state, action);
    default:
      return state;
  }
}

function getAllItems(state, action) {
  return Object.assign({}, state, {
    items: action.items,
  });
}

function getItem(state, action) {
  return Object.assign({}, state, {
    currentItem: action.item,
  });
}

function setItem(state, action) {
  return Object.assign({}, state, {
    currentItem: action.item,
  });
}

function createItem(state, action) {
  const items = Object.assign([], state.items);
  items.push(action.item);
  return Object.assign({}, state, {
    items: items,
  });
}

function updateItem(state, action) {
  const items = Object.assign([], state.items);
  const index = items.findIndex((i) => i.id === action.item.id);
  if (index > -1) {
    items.splice(index, 1, action.item);
  }
  return Object.assign({}, state, {
    currentItem: action.item,
    items: items,
  });
}

function deleteItem(state, action) {
  let items = Object.assign([], state.items);
  const index = items.findIndex((i) => i.id === action.itemId);
  if (index > -1) {
    items.splice(index, 1);
  }
  return Object.assign({}, state, {
    currentItem: new Item(),
    items: items,
  });
}

function deleteAllItems(state, action) {
  return Object.assign({}, state, {
    currentItem: new Item(),
    items: [],
  });
}

function findItemByTitle(state, action) {
  return Object.assign({}, state, {
    items: action.items,
  });
}
