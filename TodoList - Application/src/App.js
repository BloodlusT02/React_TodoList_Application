import React, { useState } from "react";
import "./App.css";

function App() {
  const [addItem, setAddItem] = useState("");
  const [userTask, setUserTask] = useState([]);

  const userInput = (e) => {
    setAddItem(e.target.value);
  };

  const addTask = () => {
    if (addItem === "") {
      alert("Please Add Some Task");
    } else {
      setUserTask((prevTask) => {
        return [...prevTask, addItem];
      });
    }

    setAddItem("");
  };

  const deleteItem = (indexToRemove) => {
    console.log("deleted")
    setUserTask((prevTask) => {
      return prevTask.filter((item,index) => {
        return index !== indexToRemove
      })
    })
  };

  return (
    <>
      <div id="main-container">
        <div id="container">
          <div id="addTaskContainer">
            <h1 id="heading">TodoList Application</h1>
            <input
              id="input"
              type="text"
              placeholder="Add Task"
              onChange={userInput}
              value={addItem}
            />
            <button id="btn" onClick={addTask}>
              +
            </button>
          </div>

          <hr style={{ margin: "20px", width: "100vh" }} />

          <div>
            <ol id="task-container">
              {userTask.map((taskItems, index) => {
                return (
                  <li id={index} key={index}>
                    {taskItems}
                    <span>
                      <i
                        className="fa-sharp fa-solid fa-trash"
                        onClick={() => deleteItem(index)}
                      ></i>
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
