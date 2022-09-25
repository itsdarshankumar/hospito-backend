exports.verifyAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
    return next();
  }
  return res.status(401).send("You are not authorized to access");
};
