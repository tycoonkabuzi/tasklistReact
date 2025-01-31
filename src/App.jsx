import { useState, useMemo } from "react";

import "./App.css";
import ButtonAdd from "./ButtonAdd";
import Task from "./Task";

function App() {
  const [task, setTask] = useState(["Build", "Create", "Download"]);
  const [newTask, setNewTask] = useState();
  const addTask = () => {
    setTask((prev) => {
      if (newTask !== "") {
        return [...prev, newTask];
      }
    });
  };

  return (
    <>
      <h1>List of tasks</h1>
      <input
        type="text"
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <ButtonAdd addTask={addTask} />
      <Task task={task} setTask={setTask} />
    </>
  );
}

export default App;
