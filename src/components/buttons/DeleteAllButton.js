import React from "react";
import { BaseButton } from "./BaseButton";

export const DeleteAllButton = ({ onClick }) => (
  <BaseButton
    text="Delete All"
    className="m-3 btn btn-sm btn-danger"
    onClick={onClick}
  />
);
