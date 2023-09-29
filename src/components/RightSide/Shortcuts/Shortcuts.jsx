import React from "react";
import "./Shortcuts.css";
import Friends from "../../../images/1.png";

import Messages from "../../../images/10.png";
import Tutorials from "../../../images/11.png";
import Courses from "../../../images/12.png";
import Fundraiser from "../../../images/13.png";
import Groups from "../../../images/2.png";
import Marketplace from "../../../images/3.png";
import Watch from "../../../images/4.png";
import Memories from "../../../images/5.png";
import Events from "../../../images/6.png";
import Gaming from "../../../images/7.png";
import Gallery from "../../../images/8.png";
import Videos from "../../../images/9.png";
const Shortcuts = () => {
  return (
    <div className="Shortcuts">
      <div className="menu">
        <h5>Links</h5>
        <div className="item">
          <img src={Friends} alt="" />
          <span>Friends</span>
        </div>
        <div className="item">
          <img src={Groups} alt="" />
          <span>Groups</span>
        </div>
        <div className="item">
          <img src={Marketplace} alt="" />
          <span>Marketplace</span>
        </div>
        <div className="item">
          <img src={Watch} alt="" />
          <span>Watch</span>
        </div>
        <div className="item">
          <img src={Memories} alt="" />
          <span>Memories</span>
        </div>
      </div>
      <hr />
      <div className="menu">
        <h5>Your Shortcuts</h5>
        <div className="item">
          <img src={Events} alt="" />
          <span>Events</span>
        </div>
        <div className="item">
          <img src={Gaming} alt="" />
          <span>Gaming</span>
        </div>
        <div className="item">
          <img src={Gallery} alt="" />
          <span>Gallery</span>
        </div>
        <div className="item">
          <img src={Videos} alt="" />
          <span>Videos</span>
        </div>
        <div className="item">
          <img src={Messages} alt="" />
          <span>Messages</span>
        </div>
      </div>
      <hr />
      <div className="menu">
        <h5>Others</h5>
        <div className="item">
          <img src={Fundraiser} alt="" />
          <span>Fundraiser</span>
        </div>
        <div className="item">
          <img src={Tutorials} alt="" />
          <span>Tutorials</span>
        </div>
        <div className="item">
          <img src={Courses} alt="" />
          <span>Courses</span>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
