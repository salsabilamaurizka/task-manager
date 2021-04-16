import React, { useContext } from "react";
import { TaskList } from "../context/TaskList";

const Task = ({ task }) => {
  const { removeTask, findItem, checkTask } = useContext(TaskList);
  const titleLineThrough = task.isChecked ? "task-title" : "";

  return (
    <li className="list-item">
      <div className="list-task">
        <input
          type="checkbox"
          checked={task.isChecked}
          onChange={() => checkTask(!task.isChecked, task.id)}
        />
        <p className={titleLineThrough}>{task.title} </p>
      </div>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{" "}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
