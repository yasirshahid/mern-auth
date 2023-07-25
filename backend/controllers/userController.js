import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// @des Auth User/set token
// @route route POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: "Auth User" });
});

// @des Register a new user
// @route route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({ name, email, password });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("Inalid user");
  }
});

// @des logout
// @route route POST /api/users/logout
// @access public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: "Logout User" });
});

// @des Get user pofile
// @route route GET /api/users/profle
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: "User Profile" });
});

// @des Update user profile
// @route route PUT /api/users/profle
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ Message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
