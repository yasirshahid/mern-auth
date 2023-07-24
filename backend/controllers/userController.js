import asyncHandler from "express-async-handler";

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
  res.status(200).json({ Message: "Register User" });
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
