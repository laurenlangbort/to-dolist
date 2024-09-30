import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>  
     <h1 className="h1ToDo">TO-DO</h1> 
    <div className="box">
      <div className="left-half"> 
        <p className="tasksHeader">Urgent Tasks</p>  
        <ul className="urgentTasks"> 
          <li className="urgentItem">task 1</li> 
        </ul>
        <p className="tasksHeader">Other Tasks</p>
      </div>  
      <div className="right-half">   
        <div className="addButton">
          <button type="button" className="button-style" onClick={openModal}>+ Add Task</button> 
        </div>
        <p className="tasksHeader">Recently Completed Tasks</p>
      </div>
      </div> 
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Task</h2>
            <form>
              <input type="text" placeholder="Enter task" />
              <button type="submit">Add Task</button>
              <button type="button" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default App
