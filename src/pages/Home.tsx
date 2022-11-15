import React, { useState } from "react"
import Layout from "../components/Layout"

const Home = () => {
  const [counter, setCounter] = useState(0)

  return (
    <Layout>
      <h1 className="text-red-500">Home page</h1>
      <button
        className="rounded px-3 py-2 text-white bg-blue-600 transform transition hover:scale-105 text-lg"
        onClick={() => setCounter(counter + 1)}
      >
        count : {counter}
      </button>
    </Layout>
  )
}

export default Home
