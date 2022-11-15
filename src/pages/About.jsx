import React, { useState } from "react";

const About = () => {
  const [state, setState] = useState(0);

  return (
    <div onClick={() => setState(state + 1)}>
      <h1>About page : {state}</h1>
    </div>
  );
};

export default About;
