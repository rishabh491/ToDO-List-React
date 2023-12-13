import React, { useState } from 'react'
import Card from './Card';

// filename app.js



function App() {
  const[task,setTask]=useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo App' },
    { id: 3, text: 'Explore React Hooks' },
  ]);
  function addtask(){
    setTodos([...todos,{id:todos.length+1,text:task}]);
    setTask("")
  }
  return (
    <>
    <div><input  value={task}  onChange={(e)=>setTask(e.target.value)}/> <button onClick={addtask} className='btn btn-success'>Add Task</button></div>
      <Card todos={todos} setTodos={setTodos}  task={task} setTask={setTask} />
    </>
    
  )
}

export default App