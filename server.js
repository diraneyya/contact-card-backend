// ES6 equivalent: import express from 'express'
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

function rootHandler(_, res) {
  res.send({
    first: "Orwa",
    last: "Diraneyya",
    avatar: "https://pbs.twimg.com/profile_images/1578722090194173953/lkDUvNAP_400x400.jpg",
    twitter: "@ODiraneyya",
    notes: "The holiday is coming ⛱️🏖️"
  });
}

app.all("/api", rootHandler);

app.listen(process.env.PORT || 2500);
