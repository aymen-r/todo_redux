import React from "react";
import ListTasks from "./components/ListTasks";
import AddTask from "./components/AddTask";
import Filter from "./components/filter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>To Do List</h1>
        <Filter />
        <AddTask />
        <ListTasks />
      </div>
    </div>
  );
}

export default App;
