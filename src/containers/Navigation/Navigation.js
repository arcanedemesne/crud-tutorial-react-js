import React, { PureComponent, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "shards-react";

import AlertBar from "../../components/AlertBar";
import SearchItem from "../../components/SearchItem";

class Navigation extends PureComponent {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapseOpen: false,
    };
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen,
      },
    });
  }

  render() {
    return (
      <Fragment>
        <Navbar
          type="dark"
          theme="primary"
          expand="md"
          className="navbar-dark bg-dark"
        >
          <NavbarBrand href="/">Jenn's App v1</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/items">Items</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/add">Add</NavLink>
              </NavItem>
            </Nav>
            <Nav navbar className="ml-auto">
              <SearchItem />
            </Nav>
          </Collapse>
        </Navbar>
        <AlertBar />
      </Fragment>
    );
  }
}

export default Navigation;
