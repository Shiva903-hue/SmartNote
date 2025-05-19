import { NotebookIcon } from 'lucide-react'
// import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-5">
      <p className="flex font-bold text-2xl items-center text-white">
        
        <NotebookIcon className="text-white w-8 h-8 font-bold " /> SmartNote
      </p>
      <ul className="flex justify-around text-center items-center">
        <Link to="/login" className="p-2 bg-white text-indigo-500 font-semibold w-20  cursor-pointer rounded-full m-1  ">
        Login
        </Link>
        <Link to="/main" className="p-2 bg-white text-indigo-500 font-semibold w-20  cursor-pointer rounded-full m-1  ">
        dashboard
        </Link>
      </ul>
    </nav>
  );
}
