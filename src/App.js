import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import EmailList from "./EmailList";
import Compose from "./Compose";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <SideBar />
        <EmailList/>
      </div>
      <Compose/>
    </div>
  );
}

export default App;
