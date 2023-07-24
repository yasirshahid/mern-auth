// @des Auth User/set token
// @route route POST /ap/users/auth
// @access public
const authUser = (req, res) => {
  res.status(200).json({ Message: "Auth User" });
};

export { authUser };
