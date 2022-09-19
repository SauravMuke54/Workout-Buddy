require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const workoutroute = require("./routes/workouts");

//express app
const app = express();

//middlwares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/workout/",workoutroute);

//Databse Connection
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log(`Server is Listening on 4000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
