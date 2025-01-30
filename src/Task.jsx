import { useEffect } from "react";

const Task = ({ task, setTask }) => {
  const deleteItem = (theTask) => {
    const filteredList = task.filter((element, index) => {
      return index != theTask;
    });
    setTask(filteredList);
  };

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
};
export default Task;
