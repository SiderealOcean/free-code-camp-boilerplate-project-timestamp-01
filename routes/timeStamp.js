// import

const express = require("express");
const { getTimeStamp, getTimeStampclean } = require("../controllers/timeStamp");
const router = express.Router();

// - /api/
router.get("/", getTimeStampclean);

// - /api/:timestamp
router.get("/:timestamp", getTimeStamp);

module.exports = router;