import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
//Get all users
export const getAllUsers = async (req, res) => {
  try {
    let users = await UserModel.find();
    users = users.map((user) => {
      const { password, ...otherDetails } = user._doc;
      return otherDetails;
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
//get a User
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//update a user
export const updateUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId, currentUserAdminStatus, password } = req.body;
  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      //   const token = jwt.sign(
      //     { username: user.username, id: user._id },
      //     process.env.JWT_KEY,
      //     { expiresIn: "1h" }
      //   );
      //   console.log({ user, token });
      res.status(200).json(user);
    } catch (error) {
      console.log("Error agya hy");
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};
//Delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only delete your own profile");
  }
};
//Follow a user
export const followUser = async (req, res) => {
  //id of the someone we want to follow him
  const id = req.params.id;
  //id of the user who want to follow someone
  const { currentUserId } = req.body;
  console.log(id, currentUserId);
  if (currentUserId === id) {
    //prevent him from follow him self
    res.status(403).json("Action forbiden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);
      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User followed!");
      } else {
        res.status(403).json("User is Already followed by you");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
};
//Unfollow a user
export const unFollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (currentUserId === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const unFollowUser = await UserModel.findById(id);
      const unFollowingUser = await UserModel.findById(currentUserId);
      if (unFollowUser.followers.includes(currentUserId)) {
        await unFollowUser.updateOne({ $pull: { followers: currentUserId } });
        await unFollowingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("Unfollowed Successfully!");
      } else {
        res.status(403).json("You are not following this User");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
