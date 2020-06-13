import React from "react";
import { BaseButton } from "./BaseButton";

export const SearchButton = ({ onClick }) => (
  <div className="input-group-append" style={{ marginTop: 25, height: 36 }}>
    <BaseButton
      type="text"
      text="Search"
      className="btn btn-outline-secondary"
      onClick={onClick}
    />
  </div>
);
