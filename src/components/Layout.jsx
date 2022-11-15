import React from "react";
import NavBar from "./NavBar.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </>
  );
};
export default Layout;
