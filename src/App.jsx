import React from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "./resources/routes.js";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </>
  );
};

export default App;
