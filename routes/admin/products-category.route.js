const express = require("express");
const router = express.Router();
const multer = require("multer");
const validate = require("../../validaters/admin/product-category.validate");

const upload = multer();
const uploadStream = require("../../middlewares/admin/uploadCloud.middleware");
const controller = require("../../controllers/admin/product-category.controller");
router.get("/", controller.index);
router.get("/create", controller.create);
router.post("/create", upload.single("thumbnail"), uploadStream.upload, validate.creatPost, controller.createCategory);

module.exports = router;
