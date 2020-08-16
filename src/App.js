import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import ConferenceList from "./components/ConferenceList.js";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="App">
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <ConferenceList searchValue={searchValue} />
    </div>
  );
}

export default App;
