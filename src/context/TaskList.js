import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const TaskList = createContext();

const TaskListProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialState);
  const checkTask = (isChecked, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isChecked } : task
    );

    console.log(newTasks);

    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  // Add tasks
  const addTask = (title) => {
    if (/\S/.test(title)) {
      setTasks([...tasks, { isChecked: false, title, id: uuid() }]);
    }
  };

  // Remove tasks
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear tasks
  const clearList = () => {
    setTasks([]);
  };

  // Find task
  const findTask = (id) => {
    const item = tasks.find((task) => task.id === id);

    setEditItem(item);
  };

  // Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );

    console.log(newTasks);

    setTasks(newTasks);
    setEditItem(null);
  };

  // Cancel edit
  const cancelEditTask = () => {
    setEditItem(null);
  };

  return (
    <TaskList.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findTask,
        editTask,
        editItem,
        cancelEditTask,
        checkTask,
      }}
    >
      {props.children}
    </TaskList.Provider>
  );
};

export default TaskListProvider;
