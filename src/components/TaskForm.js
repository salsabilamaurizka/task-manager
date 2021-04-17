import React, { useState, useContext, useEffect } from "react";
import { TaskList } from "../context/TaskList";

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem, cancelEditTask } = useContext(
    TaskList
  );
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        {editItem ? (
          <button className="btn cancel-edit-btn" onClick={cancelEditTask}>
            Cancel Edit
          </button>
        ) : (
          <button className="btn clear-btn" onClick={clearList}>
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
