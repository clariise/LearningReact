import { useState } from "react"; 
import Todo from './Todo'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
  
function App() {

  const [todos, setTodos] = useState([]); //create a state, where we add an item (sya mag store), not a singular kasi multiple and item na ilalagay so array din gamitin natin[]
  const [input, setInput] = useState(''); //Dito natin ilalagay yung input natin para matest ilagay sa bracket yung {input}

//add a function for new task using button; once we click button and input will added on our array
  const newTodo = () =>{
    //para mapush/append yung input natin sa todos() use spread operator
    if (input ===''){
      alert("Field are empty");
    }else{
      setTodos([...todos, input]);
   setInput('');  //clear an input here then dapat yung value sa setinput align sa value ng input
 }
  }

  return (
  
    <div className="container mt-5 p-5">
      <h1 className="text-primary fw-bold">✏️To do List</h1>
        <label htmlFor="newTodo"> Add new task here... </label>
        <input type="text" className="form-control" value={input} onChange={(e)=> {
          setInput(e.target.value)
        }} />  
        <button className="btn btn-primary mt-2" onClick={newTodo}>Add Task</button>
    
{/* use here the map instead of foreach
FOREACH- we have iterable object like array every item in that array 
ilalagay nya sa temporary variable pwede mo na gamitin yung variable nya
MAP- run a function for each item, more powerful*/}


    <div className="card mt-3 p-3"> 
      {/* todo (frist parameter) get the first element ng array
      index --is an index number of an array */}
    {
      todos.map((todo, index) => (
        <Todo todo={todo} index={index}/>
      ))
    }
    </div>
    </div>
  
  );
}

export default App;
