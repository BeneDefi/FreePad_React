import { useState } from "react";

import Home from "./Home";
// import Funct from './Funct'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      {/* <Funct/> */}
    </>
  );
}

export default App;
