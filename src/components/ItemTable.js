import React, { Fragment } from "react";

export const ItemTable = ({ title = "List", items = [], currentItemId, setActiveItem = () => {} }) => (
  <Fragment>
    <h4>{title}</h4>
    <ul className="list-group">
      {items && items.length > 0 &&
        items.map((item) => (
          <li
            className={`list-group-item ${
              item.id === currentItemId ? "active" : ""
            }`}
            onClick={() => setActiveItem(item)}
            key={`item_${item.id}`}
          >
            {item.title}
          </li>
        ))}
    </ul>
  </Fragment>
);
