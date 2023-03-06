// ES6 equivalent: import express from 'express'
const express = require("express");
const app = express();

function rootHandler(request, response) {
    response.send("<h1>I am upgrading my services!</h1>");
}

app.all("/", rootHandler);

app.listen(2500);
