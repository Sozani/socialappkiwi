import React from "react";
import "./ChatIcons.css";
import { GoHome, GoMail, GoGear, GoBell } from "react-icons/go";
const ChatIcons = () => {
  return (
    <div className="ChatIcons">
      <GoHome />
      <GoMail />

      <GoGear />
      <GoBell />
    </div>
  );
};

export default ChatIcons;
