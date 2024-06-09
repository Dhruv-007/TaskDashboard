import React, { useState } from "react";
import "./App.css";
import Button from "./component/Button";
import TaskForm from "./component/Form";
import { Provider } from "react-redux";
import { store } from "../src/store";
import TodoList from "./component/Form";
import Navbar from "./component/Navbar";

interface Task {
  title: string;
  description: string;
  dueDate: string;
  status: "Completed" | "Pending";
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Provider store={store}>
      <div >
        <TodoList />
       
        {/* <TaskManager/> */}
      </div>
    </Provider>
  );
}

export default App;
