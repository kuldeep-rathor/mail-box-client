import React from "react";
import "./css/emaillist.css";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const EmailType = () => {
  return (
    <div className="emailtype">
      <div className="emailtype__options emailtype__options--active">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailtype__options">
        <PeopleIcon />
        <p>People</p>
      </div>

      <div className="emailtype__options">
        <LocalOfferIcon />
        <p>Promotions</p>
      </div>
    </div>
  );
};

export default EmailType;
