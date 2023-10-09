import React, { useEffect, useState } from "react";
import "./css/emaillist.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";
import db from "./firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails").onSnapshot((snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="emaillist">
      <EmailListSetting />
      <EmailType />
      {emails.map(({ id, data }) => {
        return (
          <EmailBody
            name={data.to}
            subject={data.subject}
            message={data.message}
            time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
          />
        );
      })}
    </div>
  );
};

export default EmailList;
