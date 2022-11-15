import React, { useState } from "react";

const Home = () => {
  const [state, setState] = useState(0);

  return (
    <div onClick={() => setState(state + 1)}>
      <h1>Home page : {state}</h1>
    </div>
  );
};

export default Home;
