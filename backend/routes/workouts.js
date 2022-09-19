const express = require("express");
const { createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout}  = require("../controller/workoutController");

const router = express.Router();

const Workout = require("../models/workoutModel");

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
