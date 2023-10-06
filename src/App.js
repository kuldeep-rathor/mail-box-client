import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
