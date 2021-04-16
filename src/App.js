import React from "react";
import TaskListProvider from "./context/TaskList";
import TaskForm from "./components/TaskForm";
import TaskListComponent from "./components/TaskListComponent";

import "./App.css";
import "./styles/Switch.css"
import "./styles/Quotes.css"
import Header from "./components/Header";
import Quote from "./components/Quote";


const App = () => {
  return (
    <TaskListProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskListComponent />
          </div>
          <Quote />
        </div>
      </div>
    </TaskListProvider>
  );
};

export default App;