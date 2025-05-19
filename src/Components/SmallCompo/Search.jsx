import React from 'react';
import {  SearchIcon} from 'lucide-react';

export default function Search() {
  return (
    <div className='flex flex-col sm:flex-row max-w-md  mx-auto px-4 gap-2'>
      <input placeholder='Search'  type="text " className='flex-1 p-2  rounded-md sm:rounded-l-sm sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
<button className='px-4 py-2 bg-indigo-600 text-white rounded-md sm:rounded-l-none sm:rounded-r-sm hover:bg-indigo-700 transition duration-200 cursor-pointer ' 
> <SearchIcon/> </button>
    </div>
  )
}
