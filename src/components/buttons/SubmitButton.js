import React from "react";
import { BaseButton } from "./BaseButton";

export const SubmitButton = ({ text, onClick }) => (
  <BaseButton
    text={text}
    type="submit"
    className="badge badge-success"
    onClick={onClick}
  />
);
