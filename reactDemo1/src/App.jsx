import { useState } from "react"; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {


  return (
  
    <div className="container mt-5 p-5">
      <h1 className="text-primary fw-bold">To do List</h1>
      
        <label htmlFor="newTodo"> Add new task here... </label>
        <input type="text" className="form-control" />  
        <button className="btn btn-primary mt-2">Add Task</button>
    
    <div className="card mt-3 p-3">
<div className="alert bg-light my-2" >This is the todo list item</div>
<div className="alert bg-light my-2" >This is the todo list item</div>
<div className="alert bg-light my-2" >This is the todo list item</div>
    </div>
    </div>
  
      
  
  );
}

export default App;
