import React from "react";
import "./FollowersExpect.css";
import { Followers } from "../../../Data/FollowerData";
const FollowersExpect = () => {
  return (
    <div className="followerExpect">
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div className="details">
              <img src={follower.img} alt="" />
              <div className="nAndUsern">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>

            <button className="button followerBtn">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersExpect;
