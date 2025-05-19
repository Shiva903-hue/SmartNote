import { Plus,Settings , ArrowLeft,  } from 'lucide-react';
// import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../SmallCompo/Search';
import Workspaces from './Workspaces';

export default function Middle() {
  return (

      <nav id='top-nav' className='flex justify-between gap-2 items-center mb-7 w-full p-3 border-b-2 border-b-amber-500' >
        
        <div className="flex items-center gap-2">
        <Link to="/"><ArrowLeft className='w-8 h-8 cursor-pointer text-gray-500 hover:text-blue-500' />  </Link>  
        <h1 className='text-3xl text-wrap font-bold text-blue-950 ' > My Workspace</h1>
      <Search/>
      </div>

    <div className="menu flex gap-2 items-center">
      <button className=" cursor-pointer  flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition">
          <Plus className="h-4 w-4" />
          New Note
        </button>
      <button className=" cursor-pointer  flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition">
          <Plus className="h-4 w-4" />
          New Workspace
        </button>
<Settings className=' cursor-pointer text-gray-500 hover:text-blue-500'/>
        </div>
      </nav>

      // <Workspaces/>
    
  )
}

