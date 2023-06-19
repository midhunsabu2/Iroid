const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  signupUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.get("/", test);

router.post("/signup", signupUser);

router.post("/", loginUser);

router.get("/profile", getProfile);

module.exports = router;
