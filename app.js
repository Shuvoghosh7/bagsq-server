const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());
//routes
// const jobsRoute=require('./routes/jobs.route')




app.get("/", (req, res) => {
  res.send("Route is working!");
});

// route colling
// app.use("/",jobsRoute)



module.exports = app;
