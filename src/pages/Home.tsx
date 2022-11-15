import React, { useState } from "react"
import Layout from "../components/Layout"

const Home = () => {
  const [counter, setCounter] = useState(0)

  return (
    <Layout>
      <h1>Home page</h1>
      <button onClick={() => setCounter(counter + 1)}>count : {counter}</button>
    </Layout>
  )
}

export default Home
