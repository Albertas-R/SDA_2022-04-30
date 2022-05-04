import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const headerContainer = {
    background: "grey",
    padding: 32,
  };

  const headerUl = {
    display: "flex",
    listStyle: "none",
    gap: 32,
    padding: 0,
  };

  return (
    <div style={headerContainer}>
      <ul style={headerUl}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>
    </div>
  );
};
