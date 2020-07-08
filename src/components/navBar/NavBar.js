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
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/create">
            <li>Create</li>
          </NavLink>
        </ul>
      </nav>
    </Navigation>
  );
}

export default NavBar;
