import React from "react";
import "./RightSide.css";
import ChatIcons from "./ChatIcons/ChatIcons";
import Shortcuts from "./Shortcuts/Shortcuts";

const RightSide = () => {
  return (
    <div className="RightSide">
      <ChatIcons />
      <Shortcuts />
    </div>
  );
};

export default RightSide;
