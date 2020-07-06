import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Container,
  Col,
  Row,
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { AddItem } from "./containers/AddItem";
import { EditItem } from "./containers/EditItem";
import { ListItems } from "./containers/ListItems";
import { Navigation } from "./containers/Navigation";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Container>
          <Row style={{ marginBottom: 13 }}>
            <Col>
              <Navigation />
            </Col>
          </Row>
          <Row>
            <Col>
              <Switch>
                <Route exact path={["/", "/items"]} component={ListItems} />
                <Route exact path="/add" component={AddItem} />
                <Route path="/items/:id" component={EditItem} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
