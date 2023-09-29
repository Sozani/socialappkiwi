import React from "react";
import "./Profile.css";
import RightSide from "../../components/RightSide/RightSide";
import ProfileFeed from "./ProfileFeed/ProfileFeed";
import EditInfoCard from "./EditInfoCard/EditInfoCard";

const Profile = () => {
  return (
    <div className="ProfilePage">
      <RightSide />
      <ProfileFeed />
      <EditInfoCard />
    </div>
  );
};

export default Profile;
