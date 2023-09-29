import React from "react";
import { FaHeart, FaCommentDots, FaRegPaperPlane } from "react-icons/fa";
import "./Post.css";
const Post = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />
      <div className="postReact">
        <FaHeart />
        <FaCommentDots />
        <FaRegPaperPlane />
      </div>
      <span style={{}}>{data.likes} Likes</span>
      <div className="postDetails">
        <span>
          <b> {data.name}:</b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
