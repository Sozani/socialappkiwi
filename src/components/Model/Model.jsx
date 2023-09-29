import React from "react";
import "./model.css";
import { FaTimes } from "react-icons/fa";
const Model = ({ toggleModel }) => {
  return (
    <div className="Modal">
      <div className="overlay" onClick={toggleModel}></div>
      <div className="modalContent">
        <FaTimes onClick={toggleModel} />
        <h3>YOUR INFO</h3>
        <form>
          <div className="formInput">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="formInput">
            <input type="text" placeholder="Works At" className="oneInput" />
          </div>
          <div className="formInput">
            <input type="text" placeholder="Lives In" />
            <input type="text" placeholder="Countary" />
          </div>
          <div className="formInput">
            <input
              type="text"
              placeholder="Relationship Status"
              className="oneInput"
            />
          </div>
          <div className="formInput">
            Profile Image
            <input type="file" />
            Cover Image
            <input type="file" />
          </div>
          <input type="submit" value="Sumbit" onClick={toggleModel} />
        </form>
      </div>
    </div>
  );
};

export default Model;
