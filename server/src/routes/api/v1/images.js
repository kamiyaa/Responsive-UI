const express = require("express");

const { getImages, uploadImage } = require("../../../controllers/v1/images");

const router = express.Router();

// @route    GET api/v1/images
// @desc     Return an array of all images
// @param
// @access   Public

router.get("/", getImages);

// @route    POST api/v1/images
// @desc     Upload a new image
// @param
// @access   Public

router.post("/", uploadImage);

module.exports = router;
