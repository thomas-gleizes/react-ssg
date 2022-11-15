import React from "react"
import { Link } from "react-router-dom"

import { routes } from "../resources/routes"

const NavBar = () => {
  return (
    <div className="mb-3">
      <nav>
        <ul className="flex space-x-5">
          {routes.map((route, index) => (
            <li
              key={index}
              className="bg-blue-500 text-white px-3 py-1 rounded shadow hover:shadow-2xl transition duration-75"
            >
              <Link to={route.path}>{route.path}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
