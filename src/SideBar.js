import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./css/sidebar.css";
import Sidebaroptions from "./Sidebaroptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="compose__btn">
        Compose
      </Button>
      <div className="sidebar_scroll">
        <Sidebaroptions
          Icon={InboxIcon}
          title="Inbox"
          number="224"
          isactive={true}
        />
        <Sidebaroptions Icon={StarRateIcon} title="Starred" number={500} />
        <Sidebaroptions Icon={WatchLaterIcon} title="Snoozed" number={300} />
        <Sidebaroptions
          Icon={LabelImportantIcon}
          title="Important"
          number={254}
        />
        <Sidebaroptions Icon={SendIcon} title="Sent" number={452} />
        <Sidebaroptions Icon={DraftsIcon} title="Draft" number={254} />
        <Sidebaroptions Icon={LabelIcon} title="Category" number={254} />
        <Sidebaroptions Icon={DeleteIcon} title="[Map]/Trash" number={254} />
        <Sidebaroptions Icon={FindInPageIcon} title="Documents" number={254} />
        <Sidebaroptions Icon={ExpandMoreIcon} title="More" number={254} />
      </div>
      <hr />
      <h3 className="sidebaroptions__heading">Meet</h3>

      <Sidebaroptions Icon={VideocamIcon} title="New Meeting" />
      <Sidebaroptions Icon={KeyboardIcon} title="Join A meeting" />
      <h3 className="sidebaroptions__hangouts">Hangouts</h3>
      <div className="sidebar__bottom">
        <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocJXQ2e7hd79LWiVkFGlXu4lbIbYOiiLpZPRtgG8c_9JiR_U=s288-c-no"></Avatar>
        <p>Kuldeep Rathor</p>
        <ArrowDropDownIcon />
        <AddIcon />
      </div>
    </div>
  );
};

export default SideBar;
