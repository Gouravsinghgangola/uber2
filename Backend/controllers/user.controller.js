const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
//user ko create karna ka logic->registeruser
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req); //validatio ka result(errors ko) check karraga
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

   
  const { fullname, password, email } = req.body;
  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password: hashPassword,
  });
  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};
