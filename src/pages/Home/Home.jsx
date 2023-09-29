import React from "react";
import "./Home.css";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import PostsSide from "../../components/PostsSide/PostsSide";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostsSide />
      <RightSide />
    </div>
  );
};

export default Home;
