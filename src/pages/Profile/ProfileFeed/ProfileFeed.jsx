import React from "react";
import "./ProfileFeed.css";
import ProfileCard from "../../../components/ProfileSide/ProfileCard/ProfileCard";
import PostShare from "../../../components/PostsSide/PostShare/PostShare";
import Posts from "../../../components/PostsSide/Posts/Posts";
const ProfileFeed = () => {
  return (
    <div className="ProfileFeed">
      <ProfileCard />
      <PostShare />
      <Posts />
    </div>
  );
};

export default ProfileFeed;
