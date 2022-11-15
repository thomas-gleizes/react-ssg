import React from "react"
import NavBar from "./NavBar"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="m-5">
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  )
}
export default Layout
