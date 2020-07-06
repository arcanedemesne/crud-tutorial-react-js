import React, { Fragment } from "react";
import {
  Container, Col, Row,
} from "shards-react";

export const ItemTable = ({ title = "List", items = [], currentItemId, setActiveItem = () => {} }) => (
  <Fragment>
    <h5>{title}</h5>
    <Container>
      {items && items.length > 0 ?
        items.map((item) => (
          <Row
            style={{
              padding: 5,
              color: item.id === currentItemId ? "#fff" : "#111",
              cursor: 'pointer',
              border: 'solid 1px #111',
              borderRadius: 7,
              background: item.id === currentItemId ? "#7ac" : ""
            }}
            onClick={() => setActiveItem(item)}
            key={`item_${item.id}`}
          >
            <Col>{item.title}</Col>
          </Row>
        ))
      : <Row><Col>No items exist, yet. But you can create one <a href="/add">here</a>!</Col></Row>}
    </Container>
  </Fragment>
);
