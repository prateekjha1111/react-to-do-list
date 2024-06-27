"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [taskList, settaskList] = useState([]);
  const submitHandler = (e)=>{
    e.preventDefault();
    settaskList([...taskList, {title, desc}]);

    settitle("");
    setdesc("");
  };

  const deleteHandler = (i)=>{
    let copytask = [...taskList];
    copytask.splice(i, 1);
    settaskList(copytask);
  }
  

  let renderTask = <h2 className='text-xl'>No Task Availbale</h2>
  
  if(taskList.length > 0){
    renderTask = taskList.map((task, i)=>{
      return(
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between w-2/3'>
            <h5 className='text-2xl font-semibold'>{task.title}</h5>
            <h6 className='text-xl font-medium'>{task.desc}</h6>
      </div>
      <button
        onClick={()=>{
          deleteHandler(i);
        }}
      className='bg-red-700 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      )
    })
  }

  return (
   <>
      <h1 className='font-bold text-5xl bg-cyan-700 text-white p-5 text-center'>Prateek's To-Do List</h1>

      <form onSubmit={submitHandler}>
          <input 
            type="text" placeholder='Enter Your Task...' className='text-2xl border-zinc-800 border-2 px-4 py-2 m-8' value={title}
            onChange={(e)=>{
              settitle(e.target.value)
            }}
          />

          <input 
            type="text" placeholder='Enter Description...' className='text-2xl border-zinc-800 border-2 px-4 py-2 m-8' value={desc}
            onChange={(e)=>{
              setdesc(e.target.value)
            }}
          />

          <button className='bg-cyan-700 text-white px-4 py-2 text-2xl rounded font-bold m-5'>Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-cyan-100'>
            <ul>
              {renderTask}
            </ul>
      </div>

   </>
  )
}

export default page