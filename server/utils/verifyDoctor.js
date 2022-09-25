exports.verifyDoctor = (req, res, next) => {
  if (req.user.role === "doctor") {
    return next();
  }
  return res.status(401).send("You are not authorized to access");
};
