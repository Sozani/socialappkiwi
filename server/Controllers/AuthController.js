import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
export const registerUser = async (req, res) => {
  const { username, lastname, password, firstname } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);

  //now be sure this data correct with userModel
  const newUser = new UserModel({
    username,
    lastname,
    password: hashPass,
    firstname,
  });
  //Now save the new user and send response or catch error
  try {
    const user = await newUser.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
