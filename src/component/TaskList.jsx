import React from 'react'
import { FaBeer } from "react-icons/fa";

export default function TaskList({todo, handleEdit, handleDetate}) {

  return (
    <tr>
    <td> {todo?.fav ? <FaBeer color="yellow" /> :<FaBeer color="gray" /> }  </td>
    <td>{todo?.title}</td>
    <td>{todo?.details}</td>
    <td>{todo?.poiroty}</td>
    <td>{todo?.tag?.map((t)=> {
        return (
         <button>{t}</button>   
        )
    })}</td>
    <td><button onClick={()=> handleEdit(todo)}>Edit</button> <button onClick={()=>handleDetate(todo.id)}>Delate</button></td>
</tr>
  )
}
