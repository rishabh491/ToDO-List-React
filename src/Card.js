import React, { useState } from 'react'

function Card({todos,setTodos,task,setTask}) {
  const [isEdit,setIsEdit]=useState(false);
  const[edit,setEdit]=useState(false)
  function handleEdit(a){
    setTask(a);
    setEdit(true);
    setIsEdit(!isEdit);
  }

  function handleSave(id) {
   setTodos(todos.map((a)=>a.id===id?{id:id,text:task}:a))
   setEdit(false);
   setTask('');
  }
  function handleDelete(id){
    setTodos(todos.filter((a)=>a.id!==id))

  }
  return (
    <ul class="list-group">
    {todos.map((a)=>{
        return(<li key={a.id} class="list-group-item">{a.text} {!edit?<><button type="button" class="btn btn-primary btn-sm "  onClick={()=>handleEdit(a.text)}>Edit</button></>:<> <button type="button" class="btn btn-primary btn-sm "  onClick={()=>handleSave(a.id)}>Save</button></>} 
<button type="button" onClick={()=>handleDelete(a.id)} class="btn btn-danger btn-sm">Delete</button></li> )
        
    })}
</ul>
  )
}

export default Card