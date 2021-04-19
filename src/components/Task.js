import React, { useContext, useState, useEffect } from "react";
import { TaskList } from "../context/TaskList";

const Task = ({ task }) => {
  const {
    removeTask,
    findTask,
    checkTask,
    cancelEditTask,
    editTask,
    editItem,
  } = useContext(TaskList);

  const titleLineThrough = task.isChecked ? "task-title" : "";

  const [showEditForm, setShowEditForm] = useState(false);

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(title, task.id);
    setTitle("");
  };

  useEffect(() => {
    if (editItem) {
      setShowEditForm(editItem.id === task.id);
      setTitle(editItem.title);
    } else {
      setShowEditForm(false);
      setTitle("");
    }
  }, [editItem, task.id]);

  return (
    <div>
      {showEditForm ? (
        <form onSubmit={handleSubmit}>
          <li className="list-item">
            <div className="list-task">
              <input
                type="text"
                value={title}
                onChange={handleChange}
                required
                className="task-edit"
              />
            </div>
            <div className="edit-btn">
              <button className="task-btn btn-edit-task" type="submit">
                <i className="fas fa-check"></i>
              </button>
              <button
                className="task-btn btn-cancel-edit"
                onClick={cancelEditTask}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </li>
        </form>
      ) : (
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
            <button
              className="btn-edit task-btn"
              onClick={() => findTask(task.id)}
            >
              <i className="fas fa-pen"></i>
            </button>
          </div>
        </li>
      )}
    </div>
  );
};

export default Task;
