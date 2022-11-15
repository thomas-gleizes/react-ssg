import React from "react";
import { Link } from "react-router-dom";

import { routes } from "../resources/routes.js";

const NavBar = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "500px",
        }}
      >
        {routes.map((route, index) => (
          <Link key={index} to={route.path}>
            {route.path}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
