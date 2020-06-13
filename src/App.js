import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddItem from "./components/AddItem";
import Item from "./components/EditItem";
import ItemList from "./components/ItemList";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/items" className="navbar-brand">
              Item Checklist App
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/items"} className="nav-link">
                  Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/items"]} component={ItemList} />
              <Route exact path="/add" component={AddItem} />
              <Route path="/items/:id" component={Item} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
