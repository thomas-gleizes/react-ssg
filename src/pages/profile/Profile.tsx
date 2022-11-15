import React, { useState } from "react"
import Layout from "../../components/Layout"

const Profile = () => {
  const [state, setState] = useState(0)

  return (
    <Layout>
      <div onClick={() => setState(state + 1)}>
        <h1>Profile page : {state}</h1>
      </div>
    </Layout>
  )
}

export default Profile
