import React, { useState } from 'react'

import TaskList from './TaskList';
import Modal from './Modal';
const dataArray =[
    {
        id:crypto.randomUUID(),
        title:"Learn React",
        details:"Learn React Learn React Learn React",
        fav:false,
        poiroty:"High",
        tag:["React", "JS"]


    },
    {
        id:crypto.randomUUID(),
        title:"Learn React",
        details:"Learn React Learn React Learn React",
        fav:true,
        poiroty:"High",
        tag:["React", "JS"]


    },
]
export default function TaskBoard() {
    const [taskData, setTaskData]=useState(dataArray)
    console.log("hello");
    const [edit,setEdit]= useState(false)
    const [showModal, setShowModal]=useState(false)
    const [editTask, setEditTask]=useState(null)
   console.log(Object.is(null), "null"); 
    const [task, setTask]=  useState(editTask != null ?  {
        id:crypto.randomUUID(),
        title:"",
        details:"",
        fav:false,
        poiroty:"",
        tag:[]
    })
    console.log(editTask,"edit", task);
    console.log(task,"taskk");
    
    const handleChange=(e)=>{
e.preventDefault()
const property= [e.target.name]
const val= e.target.value

if ([e.target.name] =="tag") {
    const newtagArray = e.target.value
    setTask({...task, [e.target.name]:newtagArray.split(",")})
    
} else{
    setTask({...task, [e.target.name]:e.target.value})
}


    }
    console.log(task);


    console.log(dataArray);
    const onSubmitHandler=(e)=>{
        e.preventDefault() 
        if (edit) {
             setTaskData(taskData.map((item)=>{
if (item.id == task.id) {
    return task
}else {
    return item
}
             }))
        }else{
            setTaskData([...taskData, task])
        }
        
setShowModal(false)
    }
    const handleDetate=(id)=>{
console.log(id);
        const afterFillter=taskData.filter((todo)=> todo.id != id)
        setTaskData(afterFillter)
        setShowModal(false)
    }
    const handleDetateAll=()=>{
  setTaskData([])
    }
    const handleEdit=(todo)=>{
        console.log(todo);
        setEdit(true)
        setEditTask(todo)
        setShowModal(true)
    }
    console.log(task, "task");
  return (
    <>
    <div>
        {/* main task board */}
        {/* search box */}
        <input type="search" name="" id="" />
        {/* action wrap */}
        <div>
            <button onClick={()=> setShowModal(true)}>Add New Task</button>
            <button onClick={handleDetateAll}>Detate all</button>
        </div>
        {/* tasks list */}
        <table>
            <thead>
                <tr>
                    <td>fav</td>
                    <td>Title</td>
                    <td>Details</td>
                    <td>Poiroty</td>
                    <td>Tag</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    taskData?.map((todo)=><TaskList key={todo?.id} todo={todo} handleDetate={handleDetate} handleEdit={handleEdit} />)
                }
           
            </tbody>
        </table>



    </div>
    {/*background */}
<div></div>
{showModal && <Modal task={task} handleChange={handleChange} onSubmitHandler={onSubmitHandler} />}

    </>
  )
}
