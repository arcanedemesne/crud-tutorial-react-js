import React from "react";
import { BaseButton } from "./BaseButton";

export const DeleteButton = ({ onClick }) => (
  <BaseButton
    text="Delete"
    className="badge badge-danger mr-2"
    onClick={onClick}
  />
);
