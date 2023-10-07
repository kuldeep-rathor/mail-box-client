import React from "react";
import "./css/emaillist.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";

const EmailList = () => {
  return (
    <div className="emaillist">
      <EmailListSetting />
      <EmailType />
      <EmailBody
        name="Kuldeep Rathor"
        subject=" Subject :"
        message="We Are learning React.Js"
        time="3:30pm"
      />
    </div>
  );
};

export default EmailList;
