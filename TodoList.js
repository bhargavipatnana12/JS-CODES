import React from 'react';
import { useState } from 'react'

function App() {
const [task,setTask] = useState('');
const [todos,setTodos] = useState([]);
 const addTodo = () => {
  if(task.trim() === '') return; //if empty return nothing
  setTodos([...todos,task]); //old todos + new todo
  setTask(''); //clear the input
 }
 
 const deleteTodo = (index) => {   //todos = ['rts','node','mern']
   setTodos(todos.filter((_,i) => i!== index)); //here _ place is todo,as we dont require todo jst keep _ ///suppose we want to delete node(1st index)(i=0,1,2) check 0!== 1(true,keep), 1 !== 1 (false,remove), 2!== 1(true,keep)
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

export default App
