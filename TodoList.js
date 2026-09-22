import React from 'react';
import { useState } from 'react'

function App() {
const [task,setTask] = useState('');
const [todos,setTodos] = useState([]);
 const addTodo = () => {
  if(task.trim() === '') return;
  setTodos([...todos,task]);
  setTask('');
 }
 
 const deleteTodo = (index) => {
   setTodos(todos.filter((_,i) => i!== index));
 }


 return(
  <div><h1>TODO LIST</h1>
<input type='text' value={task} placeholder='enter task' onChange ={(e)=>setTask(e.target.value)}/>
<button onClick= {addTodo}>ADD</button>
<ul>
{todos.map((todo,index)=> (
  <li key={index}>
  {todo}
  <button onClick={()=>deleteTodo(index)}>Delete</button></li>
  
))}
</ul>
   </div>
 )
}

export default App
