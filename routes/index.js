const express = require("express");
const router = express.Router();
const axios = require("axios");
const twitter = require("../utils/twitter");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Randomness" });
});

router.post("/oauth/twitter", function(req, res, next) {
  // trigger twitter authentication call

  axios
    .post(`https://api.twitter.com/oauth/request_token`, {
      oauth_callback: twitter.callbackUrl
    })
    .then(function(response) {
      //console.log(response);
      //res.render("debug", { content: response });
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
});

module.exports = router;
