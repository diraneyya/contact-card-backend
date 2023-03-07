// ES6 equivalent: import express from 'express'
const express = require("express");
const app = express();

function rootHandler(_, res) {
  res.send({
    first: "Orwa",
    last: "Diraneyya",
    twitter: "@ODiraneyya",
  });
}

app.all("/api", rootHandler);

app.listen(process.env.PORT || 2500);
