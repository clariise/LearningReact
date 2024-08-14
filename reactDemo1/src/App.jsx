import { useState } from "react"; //useState accepts an initial state 
//and returns two values: current state and function that update the state

function App() {

  const [name, setName] = useState("Clarisse"); //when you put a parameter in here it is the value na mareturn. how do we insert variable in html, we use curly braces {name}? then declare name as "john" here 
  const [counter, setCounter] = useState(0); //
  return (
   //can put conditional inside the return 
      <>
      <h1>Hello, {name}</h1>  
      <h1 style={{color: "green"}}>{counter}</h1>
      <button onClick= {() => {
        setCounter(counter+1)
      }}>CLICK ME</button>

{/* conditional Render */}
      {counter > 10 ? (<h1>Congratulations!</h1>) : (<h1>Not Yet</h1>)
      }
      <button onClick={() =>
        setName("World!")
      }>
      Change Name</button>

{/* use of Onchange using e.target.value */}
<input type="text"onChange={(e) =>{
  setName(e.target.value)
}} />
      </>

      
     
  );
}

export default App;
