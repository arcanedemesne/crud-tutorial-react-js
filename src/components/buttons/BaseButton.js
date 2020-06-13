import React from "react";

export const BaseButton = ({
  text = "Button",
  type = "button",
  className = "btn btn-sm",
  onClick = () => {},
}) => (
  <button type={type} className={className} onClick={onClick}>
    {text}
  </button>
);
