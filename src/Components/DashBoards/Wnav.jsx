import { Plus, Settings, ArrowLeft, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Search from '../SmallCompo/Search';
// import Workspaces from './Workspaces'; // Uncomment if needed

export default function Wnav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Nav */}
      <nav
        id="top-nav"
        className="flex justify-between items-center mb-7 w-full p-3 border-b-2 border-b-amber-500 bg-white relative z-20"
      >
        <div className="flex items-center gap-2 flex-1">
          <Link to="/">
            <ArrowLeft className="w-8 h-8 cursor-pointer text-gray-500 hover:text-blue-500" />
          </Link>
          <h1 className="text-xl font-bold text-blue-950 whitespace-nowrap">workSpace</h1>
          <div className="flex-1 ml-2">
            <Search />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-2 items-center">
          <button className="cursor-pointer flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition">
            <Plus className="h-4 w-4" />
            New Note
          </button>
          <button className="cursor-pointer flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition">
            <Plus className="h-4 w-4" />
            New Workspace
          </button>
          <Settings className="cursor-pointer text-gray-500 hover:text-blue-500" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden ml-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8 text-gray-500 hover:text-blue-500" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-start pt-10 px-6">
          {/* Top Row: Back and Close */}
          <div className="flex items-center w-full justify-between mb-8">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <ArrowLeft className="w-8 h-8 text-gray-500 hover:text-blue-500" />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-8 h-8 text-gray-500 hover:text-blue-500" />
            </button>
          </div>
          {/* Title and Search */}
          <h1 className="text-2xl font-bold text-blue-950 mb-4">workSpace</h1>
          <div className="w-full mb-8">
            <Search />
          </div>
          {/* Menu Buttons */}
          <div className="w-full flex flex-col gap-4 mb-8">
            <button className="w-full py-3 border text-lg font-bold rounded-lg hover:bg-indigo-50">
              New Note
            </button>
            <button className="w-full py-3 border text-lg font-bold rounded-lg hover:bg-indigo-50">
              New Workspace
            </button>
            <button className="w-full py-3 border text-lg font-bold rounded-lg hover:bg-indigo-50 flex items-center justify-center gap-2">
              <Settings className="w-6 h-6" />
              Settings
            </button>
          </div>
          {/* Optionally, render Workspaces here */}
          {/* <Workspaces /> */}
        </div>
      )}
    </>
  );
}