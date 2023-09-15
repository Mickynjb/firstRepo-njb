import { useState } from "react"
import classes from "./todo.module.css"


export default function Todo({todo}) {
//declare a state isCompleted to false
  const [isCompleted,setisCompleted]=useState(false)

  //create a function to change the value of our state
    console.log(isCompleted);
    function completedHandle(){
    console.log(todo);
    //set isCompleted state to true
    setisCompleted(true)
    setnotCompleted(false)
    }
    //ASSIGNMENT
    const [notCompleted,setnotCompleted]=useState(false)
    function uncompletedHandle(){
        setnotCompleted(true)
        setisCompleted(false)

    }
    return(
        //conditional rendering
        //if the condition is true  
      
        <div className={isCompleted && classes.completed || notCompleted && classes.notcompleted || ""}>

       
      
      <li>{todo}</li>
      <button onClick={completedHandle}>completed</button>
      <button onClick={uncompletedHandle}>not completed</button>
      
      </div>
      
    )    
}