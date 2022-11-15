import React, { useState } from "react";

const ProfileSettings = () => {
  const [state, setState] = useState(0);

  return (
    <div onClick={() => setState(state + 1)}>
      <h1>profile settings page : {state}</h1>
    </div>
  );
};

export default ProfileSettings;
