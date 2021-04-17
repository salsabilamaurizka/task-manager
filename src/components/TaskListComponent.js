import React, { useContext } from "react";
import { TaskList } from "../context/TaskList";
import Task from "./Task";

const TaskListComponent = () => {
  const { tasks } = useContext(TaskList);

  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">
          <p>No Tasks</p>
        </div>
      )}
    </div>
  );
};

export default TaskListComponent;
