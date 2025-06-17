import { Plus, Settings, ArrowLeft, Menu, X } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../SmallCompo/Search";

export default function Wnav({ setWform, showBtn, senote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/90 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-[1920px] mx-auto"> 
          <div className="flex items-center justify-between h-20 px-6 sm:px-8">
            {/* Left Section */}
            <div className="flex items-center space-x-6 flex-1"> 
              <Link 
                to="/"
                className="p-2.5 rounded-full hover:bg-slate-100 transition-colors"
              >
                <ArrowLeft className="w-7 h-7 text-slate-600" /> 
              </Link>
              
              <h1 className="text-3xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-indigo-900">
                workspace
              </h1>
              
              {/* Search Bar */}
              <div className="hidden sm:block flex-1 max-w-2xl ml-6">
                <Search />
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center space-x-4">
              <button
                onClick={() => setWform(true)}
                className="flex items-center px-6 h-11 text-base font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <Plus className="w-5 h-5 mr-2" />
                New Workspace
              </button>

              {showBtn && (
                <button
                  onClick={() => senote(true)}
                  className="flex items-center px-6 h-11 text-base font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  New Note
                </button>
              )}

              <button
                className="p-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors curp"
                aria-label="Settings"
              >
                <Settings className="w-6 h-6" /> {/* Increased icon size */}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden p-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Menu</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Search */}
              <div className="p-6 border-b border-slate-200">
                <Search />
              </div>

              {/* Actions */}
              <div className="p-6 space-y-4">
                <button
                  onClick={() => {
                    setWform(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center w-full px-6 h-12 text-base font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  New Workspace
                </button>

                {showBtn && (
                  <button
                    onClick={() => {
                      senote(true);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center w-full px-6 h-12 text-base font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    New Note
                  </button>
                )}

                <button className="flex items-center justify-center w-full px-6 h-12 text-base font-medium text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
                  <Settings className="w-5 h-5 mr-2" />
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
}

Wnav.propTypes = {
  setWform: PropTypes.func.isRequired,
  senote: PropTypes.func.isRequired,
  showBtn: PropTypes.bool.isRequired,
};