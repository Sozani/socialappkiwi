import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: false,
    },
    lastname: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesin: String,
    worksAt: String,
    country: String,
    relationship: String,
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
      },
    ],
    following: [],
  },
  { timestamps: true }
);
//UserSchema will be imported when we put Users
const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;
