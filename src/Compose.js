import React from "react";
import "./css/compose.css";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

const Compose = () => {
  const dispatch = useDispatch();
  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>
      <div className="compose__body">
        <div className="compose__bodyForm">
          <input type="email" placeholder="Recipients" />
          <input type="text" placeholder="Subject" />
          <textarea rows="20"></textarea>
        </div>
      </div>
      <div className="compose__footer">
        <div className="compose__footerLeft">
          <button type="submit">
            Send <ArrowDropDownIcon />
          </button>
        </div>
        <div className="compose__footerRight">
          <FormatColorTextIcon />
          <LinkIcon />
          <InsertEmoticonIcon />
          <NoteAddIcon />
          <PhotoIcon />
          <PhonelinkLockIcon />
          <CreateIcon />
          <MoreVertIcon />
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default Compose;
