import React from "react";
import "./PostShare.css";
import profileImage from "../../../images/profileimage.jpg";
import { useRef, useState } from "react";
import { FaImage, FaRegWindowClose } from "react-icons/fa";
const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
      <div className="inputContainer">
        <img src={profileImage} alt="" />
        <div>
          <input type="text" placeholder="Write Something ..." />
          <div
            className="icon"
            onClick={() => {
              imageRef.current.click();
            }}
          >
            <FaImage />
          </div>
        </div>
        <button className="button shareBtn">Share</button>
        <div
          className=""
          style={{
            display: "none",
          }}
        >
          <input
            type="file"
            name="imageRf"
            id=""
            ref={imageRef}
            onChange={onImageChange}
          />
        </div>
      </div>

      {image && (
        <div className="previewImage">
          <FaRegWindowClose onClick={() => setImage(null)} />
          <img src={image.image} alt="" />
        </div>
      )}
    </div>
  );
};

export default PostShare;
