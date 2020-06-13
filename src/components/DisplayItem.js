import React from "react";
import { Link } from "react-router-dom";

export const DisplayItem = ({ currentItem }) => (
  <div className="col-md-6">
    {currentItem.id ? (
      <div>
        <h4>Item</h4>
        <div>
          <label>
            <strong>Title:</strong>
          </label>{' '}
          {currentItem.title}
        </div>
        <div>
          <label>
            <strong>Description:</strong>
          </label>{' '}
          {currentItem.description}
        </div>
        <div>
          <label>
            <strong>Status:</strong>
          </label>{' '}
          {currentItem.isChecked ? "Checked" : "Not Checked"}
        </div>

        <Link to={"/items/" + currentItem.id} className="badge badge-warning">
          Edit
        </Link>
      </div>
    ) : (
      <div>
        <br />
        <p>Please click on a Item...</p>
      </div>
    )}
  </div>
);
