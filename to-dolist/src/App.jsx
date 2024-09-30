import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // initializes new state, isPopUpOpen starts with value false, setIsPopUpOpen is
  // the state updater, changes the value of isPopUpOpen
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  // opens PopUp by changing state to true
  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  // closes PopUp by changing state to false
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      <h1 className="h1ToDo">TO-DO</h1>

      {/* creates flexbox to hold the important info */}
      <div className="box">
        {/* left half of box */}
        <div className="left-half">
          {/* urgent tasks */}
          <p className="tasksHeader">Urgent Tasks</p>
          <ul className="urgentTasks">
            <li className="urgentItem">task 1</li>
          </ul>

          {/* other tasks */}
          <p className="tasksHeader">Other Tasks</p>
        </div>

        {/* right hald of the box */}
        <div className="right-half">
          {/* add tasks */}
          <div className="addButton">
            <button type="button" className="button-style" onClick={openPopUp}>
              + Add Task
            </button>
          </div>

          {/* completed tasks */}
          <p className="tasksHeader">Recently Completed Tasks</p>
        </div>
      </div>

      {/* conditional rendering, if isPopUpOpen is true, then rest shows up */}
      {isPopUpOpen && (
        <div className="popUp-overlay" onClick={closePopUp}>
          {/* because the onClick says closePopUp so you can click anywhere but the popUp 
        because e.stopPropagation stops the popUp from closing when clicked around the 
        content */}
          <div className="popUp-content" onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h2 style={{ fontSize: "30px", fontFamily: "Inter" }}>
                + Add Task
              </h2>
              <button type="button" onClick={closePopUp}>
                Close
              </button>
            </div>
            <form className="formFill">
              <label for="task">Task: </label>
              <input type="text" id="task" placeholder="Enter task" /> <br></br>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <p>Urgent: </p>
                <p>Yes: </p>
                <input
                  type="checkbox"
                  id="urgentYes"
                  placeholder="Enter task"
                />
                <p>No: </p>
                <input type="checkbox" id="urgentNo" placeholder="Enter task" />
              </div>
              <button type="submit" className="submitButton">
                Add Task
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
