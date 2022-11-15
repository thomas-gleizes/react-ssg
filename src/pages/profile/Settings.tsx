import React, { useState } from "react"
import Layout from "../../components/Layout"

const ProfileSettings = () => {
  const [state, setState] = useState(0)

  return (
    <Layout>
      <div onClick={() => setState(state + 1)}>
        <h1>profile settings page : {state}</h1>
      </div>
    </Layout>
  )
}

export default ProfileSettings
