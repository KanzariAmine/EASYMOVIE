import React from "react";
import { Navigation } from "./NavBar.styled";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <Navigation>
      <nav className="nav">
        <ul>
          <NavLink activeClassName="active" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName="active" to="/create">
            <li>Create</li>
          </NavLink>
          <NavLink activeClassName="active" to="/update">
            <li>Update</li>
          </NavLink>
        </ul>
      </nav>
    </Navigation>
  );
}

export default NavBar;
