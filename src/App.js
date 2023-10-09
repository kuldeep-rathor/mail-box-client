import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import EmailList from "./EmailList";
import Compose from "./Compose";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import EmailDetail from "./EmailDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  // console.log(isMessageOpen)
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <SideBar />
          <Switch>
            <Route exact path="/">
              <EmailList />
            </Route>
            <Route path="/mail">
              <EmailDetail />
            </Route>
          </Switch>
        </div>
        {isMessageOpen && <Compose />}
      </div>
    </Router>
  );
}

export default App;
