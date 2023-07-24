import asyncHandler from "express-async-handler";

// @des Auth User/set token
// @route route POST /ap/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error("Something went wrong");
  res.status(200).json({ Message: "Auth User" });
});

export { authUser };
