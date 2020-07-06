import React, { Fragment } from "react";
import {
  Badge,
  Card,
  CardTitle,
  CardBody,
  Button,
} from "shards-react";

export const DisplayItem = ({ currentItem }) => (
  <Fragment>
    {currentItem.id ? (
      <Card style={{ maxWidth: "300px" }}>
        <CardBody>
          <CardTitle>{currentItem.title}</CardTitle>
          <p>{currentItem.description}</p>
          <p>
            <Badge outline disabled theme="light">
              {currentItem.isChecked ? "checked" : "unchecked"}
            </Badge>
          </p>
          <Button href={"/items/" + currentItem.id} theme="warning">
            Edit
          </Button>
        </CardBody>
      </Card>
    ) : (
      <Fragment>
        <p>Please click on a Item...</p>
      </Fragment>
    )}
  </Fragment>
);
