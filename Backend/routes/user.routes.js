const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController=require('../controllers/user.controller')

router.post("/register", [
  body("email").isEmail().withMessage("Invalid email"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("firstname must be 3 characters long"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("password must be at least 5 characters long"),
],
userController.registerUser
);

module.exports = router;
