import React from "react";
import { BaseButton } from "./BaseButton";

export const ToggleButton = ({
  text = null,
  isChecked = false,
  onChange = () => {},
}) => (
  <BaseButton
    text={text}
    className="badge badge-primary mr-2"
    onClick={() => onChange(!isChecked)}
  />
);
