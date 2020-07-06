import { shardReactEnums } from '../constants/shardReactEnums';

function DefaultAlertStatus(
  open = false,
  theme = null,
  message = null,
) {
  return {
    open,
    theme,
    message,
  };
}

const AlertStatuses = {
  CREATE_ITEM: {
    SUCCESS: new DefaultAlertStatus(true, shardReactEnums.Themes.SUCCESS, "Item created!"),
    FAILURE: new DefaultAlertStatus(true, shardReactEnums.Themes.DANGER, "An error occurred. Item was not created."),
  },
  UPDATE_ITEM: {
    SUCCESS: new DefaultAlertStatus(true, shardReactEnums.Themes.SUCCESS, "Item updated!"),
    FAILURE: new DefaultAlertStatus(true, shardReactEnums.Themes.DANGER, "An error occurred. Item was not updated."),
  },
  DELETE_ITEM: {
    SUCCESS: new DefaultAlertStatus(true, shardReactEnums.Themes.SUCCESS, "Item deleted!"),
    FAILURE: new DefaultAlertStatus(true, shardReactEnums.Themes.DANGER, "An error occurred. Item was not deleted."),
  },
  DELETE_ALL_ITEMS: {
    SUCCESS: new DefaultAlertStatus(true, shardReactEnums.Themes.SUCCESS, "All items deleted!"),
    FAILURE: new DefaultAlertStatus(true, shardReactEnums.Themes.DANGER, "An error occurred. No items were deleted."),
  }
};

export const AlertStatus = {
  DefaultAlertStatus,
  AlertStatuses,
};
