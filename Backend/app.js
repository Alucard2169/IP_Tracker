const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;

const axios = require("axios");

app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  try {
    res.redirect("/api");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get(`/api/:ip`, async (req, res) => {
  const ipAddress = req.params.ip;
  try {
    const data = await axios.get(
      `https://get.geojs.io/v1/ip/geo/${ipAddress}.json`
    );
    const { latitude, longitude } = data.data;

    if (latitude === "nil" || longitude === "nil") {
      res.status(200).json({
        message: "IP address is either Private or Invalid",
        data: null,
      });
    } else {
      res.status(200).json({ data: data.data });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log("server running on PORT:", PORT);
});
