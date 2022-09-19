import { useEffect,useState } from "react";
import WorkoutDetails from  '../components/WorkoutDetails'
import WorkoutForm from  '../components/WorkoutForm'
export const Home = () => {
  

  const [workouts,setWorkouts]=useState(null);
  useEffect(()=>{

    

    const fetchWorkouts = async ()=>{

      const response =await fetch('/workout')
      const json = await response.json()
      if(response.status){
      
         setWorkouts(json)
      }
      console.log();
    } 
    fetchWorkouts()
  },[])

  return (
  <div className="home">
    <div className="workouts">
      {
        workouts && workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))
      }

    </div>
    <WorkoutForm/>

  </div>
  );
};
