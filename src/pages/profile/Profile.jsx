import React, { useState } from "react";

const Profile = () => {
  const [state, setState] = useState(0);

  return (
    <div onClick={() => setState(state + 1)}>
      <h1>Profile page : {state}</h1>
    </div>
  );
};

export default Profile;
