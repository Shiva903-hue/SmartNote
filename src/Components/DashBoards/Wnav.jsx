import { Plus, Settings, ArrowLeft, Menu, X } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../SmallCompo/Search";

export default function Wnav({ setWform,   showBtn , senote}) {
  //setNote
  // State to manage the visibility of the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        id="top-nav"
        className="flex justify-between items-center mb-7 w-full p-3 bg-indigo-100 relative z-20"
      >
        {/* Left Section: Back Button, Title, and Search */}
        <div className="flex items-center gap-2 flex-1">
          <Link to="/">
            <ArrowLeft className="w-8 h-8 cursor-pointer text-gray-500 hover:text-blue-500" />
          </Link>
          <h1 className="text-3xl font-bold text-blue-950 whitespace-nowrap">
            workSpace
          </h1>
          <div className="flex-1 ml-2 hidden sm:flex">
            <Search />
          </div>
        </div>

        {/* Desktop Menu Section */}
        <div className="hidden sm:flex gap-2 items-center">
          
          <button
            onClick={() => setWform(true)}
            className="cursor-pointer flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition">
            <Plus className="h-4 w-4" />
            New Workspace
          </button>

        {showBtn && 
          <button
            onClick={() => senote(true)}
            className="cursor-pointer flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition">
            <Plus className="h-4 w-4" />
            New Note
          </button> } 

          {/* Settings Icon */}
          <Settings className="cursor-pointer text-gray-500 hover:text-blue-500" />
        </div>

        {/* Mobile Hamburger Menu Button */}
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
        <div className="h-[21rem] fixed inset-0 bg-indigo-50 z-50 flex flex-col items-center justify-start pt-10 px-6 shadow-2xs">
          {/* Top Row: Back and Close Buttons */}
          <div className="flex items-center w-full justify-between mb-8">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <ArrowLeft className="w-10 h-10 text-gray-500 hover:text-blue-500" />
            </Link>

            {/* Mobile Menu Title */}
            <h1 className="text-3xl font-bold text-blue-950 mb-4">WorkSpace</h1>

            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-10 h-10 text-gray-500 hover:text-blue-500" />
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="w-full flex flex-col gap-4 mb-8">
            {/* Button to create a new note */}
            <button className="w-full py-3 border text-lg font-bold rounded-lg hover:bg-indigo-500 bg-indigo-600 text-white cursor-pointer">
              New Note
            </button>

            {/* Button to create a new workspace */}
            <button className="w-full py-3 border text-lg font-bold rounded-lg hover:bg-indigo-500 bg-indigo-600 text-white cursor-pointer">
              New Workspace
            </button>

            {/* Settings Button */}
            <button className="w-full py-3 border text-lg font-bold rounded-lg hover:bg-indigo-500 flex items-center justify-center gap-2 bg-indigo-600 text-white cursor-pointer">
              <Settings className="w-6 h-6" />
              Settings
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// PropTypes validation to ensure the correct props are passed
Wnav.propTypes = {
  setWform: PropTypes.func.isRequired, // Validate that the setWform prop is a required function
  senote: PropTypes.func.isRequired, // Validate that the setNote prop is a required function
  buttonName: PropTypes.func.isRequired, // Validate that the setNote prop is a required function
  showBtn: PropTypes.func.isRequired, // Validate that the setNote prop is a required function
};
