import {  FolderOpen, Notebook, Star, Tag, Watch } from 'lucide-react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WorkspaceForm from '../../forms/WorkspaceForm';
import NoteForm from '../../forms/NoteForm';

export default function Workspaces({wform ,setWform , setNote , note}) {
 

    const [workspace ,setWorkspace]=useState([
        {
            title: 'Workspace',
            createTime:"1 day ago",
            tags:["Persnol", "ideas"],
            quantity: 12
        },
        {
            title: 'Workspace',
            createTime:"1 day ago",
            tags:["Persnol", "ideas" ,"map"],
            quantity: 12
        },
        {
            title: 'Workspace',
            createTime:"1 day ago",
            tags:["Persnol", "ideas"],
            quantity: 12
        },
        {
            title: 'Workspace',
            createTime:"1 day ago",
            tags:["Persnol", "ideas"],
            quantity: 12
        },
        {
            title: 'Workspace',
            createTime:"1 day ago",
            tags:["Persnol", "ideas"],
            quantity: 12
        },
        {
            title: 'Workspace',
            createTime:"1 day ago",
            tags:["Persnol", "ideas"],
            quantity: 12
        },
        {
            title: 'Workspace',
            createTime:"1 day ago",
            tags:["Persnol", "ideas"],
            quantity: 12
        },
        {
            title: 'Workspace',
            createTime:"1 day ago",
            tags:["Persnol", "ideas"],
            quantity: 12
        },
        {
            title: 'Workspace',
            createTime:"1 day ago",
            tags:["Persnol", "ideas"],
            quantity: 12
        },
    ])

  // Updated to accept title and tags
  const handleCreate = (title, tags) => {
    if (!title.trim()) return;
    const newWorkspace = {
      title,
      createTime: "just now",
tags: Array.isArray(tags) ? tags : [tags], 
      quantity: 0,
    };
    setWorkspace([newWorkspace, ...workspace]);
  };
  return (
    <div className=' w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5'>
      {workspace.map((notes,index)=>(  
        <div key={index} className="border rounded-2xl border-indigo-300 p-3.5 m-2 bg-white  ">
                <div className='flex items-center justify-between m-5' >
                        <h1 className='font-semibold text'>{notes.title}</h1>
                        <Star className='w-4 h-4 cursor-pointer text-gray-500 hover:text-yellow-300 '/>
                </div>
                <div className=" flex  gap-3 items-start justify-between "> 
            <div className="">
                    <p className='flex gap-2 items-center p-2 text-gray-500 '> <Watch className='w-4 h-4' />{notes.createTime} </p>

                    <p  className='flex gap-2 items-center  text-gray-500 '> <Tag className='w-4 h-4'/>
                    {notes.tags.map((tag,tagIndex)=>( <span key={tagIndex} className='bg-purple-100  text-indigo-500 rounded-2xl
                     p-1' >{tag}</span> ))}
                         </p>
                    <p className='flex gap-2 items-center p-2  text-gray-500' > <Notebook className='w-4 h-4'/> {notes.quantity} notes </p>
                    </div>

                    
           <Link to="/preview" >
            <button title='Open' className=" cursor-pointer   bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition"> 
           <FolderOpen/> 
           </button>
          </Link>
               
                </div>
       </div> ) )}
       {wform &&<WorkspaceForm setWform={setWform}  handleCreate={handleCreate}  />}
       {note && <NoteForm setNote={setNote}/>}
     
    </div>
  )
}
Workspaces.propTypes={
    setWform: PropTypes.func.isRequired,
    wform: PropTypes.func.isRequired,
    setNote: PropTypes.func.isRequired,
    note: PropTypes.func.isRequired
}