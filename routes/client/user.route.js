const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/user.controller");
const validate = require("../../validaters/client/user.validate");

router.get("/register", controller.register);
router.get("/login", controller.login);
router.post("/register", validate.registerPost, controller.registerPost);
router.post("/login", validate.loginPost, controller.loginPost);

module.exports = router;
