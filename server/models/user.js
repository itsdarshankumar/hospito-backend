const user = require("../schema/user");

//register user
exports.registerUser = async (name, email, hashPassword) => {
  const newUser = new user({
    name: name,
    email: email,
    password: hashPassword,
  });
  try {
    const dataToSave = newUser.save();
    return dataToSave;
  } catch (error) {
    return error;
  }
};

//fetch user using email
exports.fetchUserByEmail = async (email) => {
  try {
    const result = await user.findOne({ email: email });
    return result;
  } catch (error) {
    return error;
  }
};

//fetch user by name and role
exports.fetchUserByName = async (name, role) => {
  try {
    const result = await user.find({ name: name, role: role });
    return result;
  } catch (error) {
    return error;
  }
};
