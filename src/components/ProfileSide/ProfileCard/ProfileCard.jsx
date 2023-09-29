import React from "react";
import "./ProfileCard.css";
import ProfileImage from "../../../images/profileimage.jpg";
import BackgroundImage from "../../../images/backgroundimage.jpg";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="profileImages">
        <img src={BackgroundImage} alt="" />
        <img src={ProfileImage} alt="" />
      </div>

      <div className="profileData">
        <span>John Kaloni</span>
        <span>Web Developer</span>
      </div>
      <hr />
      <div className="status">
        <div className="followers">
          <span>Followers</span>
          <span>3580</span>
        </div>
        <div class="verticalLine"></div>
        <div className="posts">
          <span>Posts</span>
          <span>553</span>
        </div>
        {ProfilePage && (
          <>
            {" "}
            <div class="verticalLine"></div>
            <div className="posts">
              <span>Followers</span>
              <span>4000</span>
            </div>
          </>
        )}
      </div>

      <hr />
      {ProfilePage ? "" : <span>My profile</span>}
    </div>
  );
};

export default ProfileCard;
