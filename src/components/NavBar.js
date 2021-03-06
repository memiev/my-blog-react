import React from "react-router-dom";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles-list">Articles</Link>
        </li>
      </ul>
    </nav>
  );
};
