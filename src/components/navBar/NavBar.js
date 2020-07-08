import React from "react";
import { Navigation } from "./NavBar.styled";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <Navigation>
      <nav>
        <NavLink to="/">
          <img
            src="https://www.easy.movie/hubfs/easymovie-full-color.svg"
            alt="easy_movie_icon"
            style={{ width: "165px" }}
          />
        </NavLink>
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
