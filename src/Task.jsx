import React from "react";
import { useCallback } from "react";
const Task = React.memo(({ task, setTask }) => {
  console.log("Task component renders");
  const deleteItem = useCallback(
    (theTask) => {
      console.log("Delete Mounted");
      const filteredList = task.filter((element, index) => {
        return index != theTask;
      });
      setTask(filteredList);
    },
    [setTask]
  );

  return (
    <ol>
      {task.map((aTask, index) => (
        <div className="list-tasks" key={index}>
          <li>{aTask}</li>
          <button onClick={() => deleteItem(index)} className="delete">
            x
          </button>
        </div>
      ))}
    </ol>
  );
});
export default Task;
