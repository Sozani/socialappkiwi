import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
//register user
export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;

  //now be sure this data correct with userModel
  const newUser = new UserModel(req.body);
  const { username } = req.body;
  //Now save the new user and send response or catch error
  try {
    const oldUser = await UserModel.findOne({ username });
    if (oldUser) {
      return res
        .status(400)
        .json({ message: "username is already registered!" });
    }
    const user = await newUser.save();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// login user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username: username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      validity
        ? res.status(200).json(user)
        : res.status(400).json("Worng Password");
    } else {
      res.status(404).json("User dones't exists");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
