import React from "react";

export const TextBox = ({
  id = null,
  label = "",
  placeholder = "Enter text here...",
  value = "",
  onChange = () => {},
}) => (
  <div className="form-group">
    <label htmlFor="title">{label}</label>
    <input
      id={id}
      type="text"
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);
