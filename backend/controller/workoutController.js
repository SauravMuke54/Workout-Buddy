const workoutroute = require('../routes/workouts');

const Workout = require("../models/workoutModel");
const { default: mongoose } = require('mongoose');


//create workout

const createWorkout=async(req,res)=>{

    const { title, load, reps} = req.body;
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    })
    res.statusCode=200;
    res.json(workout);
  } catch (error) {
    res.statusCode=400;
    res.json({
      mssg:error.message
);
  }



}

// get all workouts

const getWorkouts=async (req,res)=>{

  const workouts= await Workout.find({}).sort({createdAt: -1})

  res.status(300).json(workouts)

}

// get particular workout

const getWorkout = async (req,res)=>{
  const {id}=req.params

  if(!mongoose.Types.ObjectId.isValid(id)){

    res.status(404).json({error:'No data found'})

  }
  const workout = await Workout.findById(id)

  if(!workout){
    res.status(404).json({error:'No Data Found!!!'})
  }
  
  res.status(200).json({workout})
}

// deletintg a workout

const deleteWorkout=async (req,res)=>{

  const {id}=req.params

  if(!mongoose.Types.ObjectId.isValid(id)){

    res.status(404).json({error:'No data found'})

  }

  const workout = await Workout.findByIdAndDelete({_id:id})
  
  if(!workout){
    res.status(404).json({error:'No Data Found!!!'})
  }
  
  res.status(200).json({workout})

}


// update a record

const updateWorkout=async (req,res)=>{

  const {id}=req.params

  if(!mongoose.Types.ObjectId.isValid(id)){

    res.status(404).json({error:'No data found'})

  }

  const workout = await Workout.findByIdAndUpdate({_id:id},{
    ...req.body
  })
  
  if(!workout){
    res.status(404).json({error:'No Data Found!!!'})
  }
  
  res.status(200).json({workout})


}
module.exports={
    createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout
}