import React from "react";
import "./EditInfoCard.css";
import { FaPen } from "react-icons/fa";
import ProfileImage from "../../../images/profileimage.jpg";
import FollowersExpect from "../../../components/ProfileSide/FollowersExpect/FollowersExpect";
import Model from "../../../components/Model/Model";
import { useState } from "react";
const EditInfoCard = () => {
  const [model, setModel] = useState(false);
  const toggleModel = () => {
    setModel((prevModel) => {
      if (prevModel) {
        document.body.classList.remove("active-model");
      } else {
        document.body.classList.add("active-model");
      }
      return !prevModel;
    });
  };
  return (
    <div className="EditInfoCard">
      <div className="profileEditing">
        <div className="imageContainer">
          <div className="profile-image">
            <img src={ProfileImage} alt="" />
          </div>
          <h4>John koloni</h4>
        </div>

        <div className="editIcon" onClick={toggleModel}>
          <FaPen />
          {model && <Model />}
        </div>
      </div>
      <hr />
      <div className="profileInfo">
        <div className="profileTitle">Web Developer</div>
        <div className="profileDescription">
          <span>
            <strong>Lives in:</strong> Chautauqua
          </span>

          <span>
            <strong>Work at:</strong> Facebook
          </span>
        </div>
        <button className="logoutBtn button">Logout</button>
      </div>
      <hr />
      <FollowersExpect />
    </div>
  );
};

export default EditInfoCard;
