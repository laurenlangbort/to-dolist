import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <> 
    <div className="box">
      <div> 
        <h1 className="h1ToDo">TO-DO</h1> 
        <p className="tasksHeader">Urgent Tasks</p> 
        <p className="tasksHeader">Other Tasks</p>
      </div>  
      <div>   
        <div>
          <button type="button">+ Add Task</button> 
        </div>
        <p className="tasksHeader">Recently Completed Tasks</p>
      </div>
      </div>
    </>
  )
}

export default App
