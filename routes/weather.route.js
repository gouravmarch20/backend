const express = require("express");
const router = express.Router();
const { getWeather } = require("../controllers/weather.controller");

router.post("/getWeather", getWeather);

module.exports = router;
