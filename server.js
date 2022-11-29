const express = require('express');
require('dotenv').config();
require('./config/mongoose');
const route = require("./config/route.js");
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(route);
app.listen(3000, () => {
  console.log("server is on port 3000");
})