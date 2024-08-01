import React from 'react'

export default function Modal({onSubmitHandler, handleChange, task }) {
  return (
    <form onSubmit={onSubmitHandler}>
    <h1>Add Task</h1>
    <div>
    <div>
        <label htmlFor="">Title</label>
        <input type="text" name="title" value={task.title} onChange={handleChange} />
    </div>
    <div>
        <label htmlFor="">Details</label>
        <input type="text" name="details" value={task.details} onChange={handleChange} />
    </div>
    <div>
        <label htmlFor="">Poiroty</label>
        <input type="text" name="poiroty" value={task.poiroty} onChange={handleChange} />
    </div>
    <div>
        <label htmlFor="">Tag</label>
        <input type="text" name="tag" value={task.tag} onChange={handleChange} />
    </div>
        
       <input type="submit" value="ADD tASK" />
        
        
    </div>
</form>
  )
}
