import React from "react";
import "./ProfileSide.css";
import SearchLogo from "./SearchLogo/SearchLogo";
import ProfileCard from "./ProfileCard/ProfileCard";
import FollowersExpect from "./FollowersExpect/FollowersExpect";
const ProfileSide = () => {
  return (
    <div className="profileSide">
      <SearchLogo />
      <ProfileCard />
      <FollowersExpect />
    </div>
  );
};

export default ProfileSide;
