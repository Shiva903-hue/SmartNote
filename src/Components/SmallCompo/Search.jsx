import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Search() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <div className="w-full">
      <div
        className={`relative flex items-center w-full rounded-xl
          ${
            isFocused
              ? "ring-2 ring-slate-900 bg-white shadow-sm"
              : "bg-slate-100 hover:bg-slate-200/70"
          }
          transition-all duration-200 ease-in-out
        `}
      >
        {/* Search Icon */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon
            className={`h-4 w-4 ${
              isFocused ? "text-slate-900" : "text-slate-500"
            }`}
          />
        </div>

        {/* Search Input */}
        <input
          type="search"
          placeholder="Search Workspace..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            block w-full rounded-xl border-0 py-2.5 pl-10 pr-3
            text-sm text-slate-900 placeholder:text-slate-500
            focus:ring-0 bg-transparent
          `}
        />

        {/* Clear Button - Show only when there's input */}
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-2 p-1 rounded-full hover:bg-slate-200">
            
            <span className="sr-only">Clear search</span>
            <svg
              className="h-4 w-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown - Show when focused and has input */}
      {isFocused && searchQuery && (
        <div className="absolute mt-2 w-full max-w-[calc(100vw-2rem)] sm:max-w-lg bg-white rounded-xl shadow-lg border border-slate-200/60 overflow-hidden">
          <div className="p-2">
            {/* Recent Searches */}
            <div className="px-3 py-2">
              <h3 className="text-xs font-medium text-slate-500 mb-2">
                Recent Searches
              </h3>
              <div className="space-y-1">
                {["Marketing Plan", "Q2 Goals", "Team Updates"].map((item) => (
                  <button
                    key={item}
                    className="flex items-center w-full px-3 py-1.5 text-sm text-slate-700 rounded-lg hover:bg-slate-100">
                    <SearchIcon className="h-3.5 w-3.5 mr-2 text-slate-400" />
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Results */}
            <div className="border-t border-slate-200/60 mt-2 pt-2 px-3 pb-2">
              <h3 className="text-xs font-medium text-slate-500 mb-2">
                Suggestions
              </h3>
              <div className="space-y-1">
                {searchQuery &&
                  ["Workspace 1", "Workspace 2", "Notes"].map((item) => (
                    <button
                      key={item}
                      className="flex items-center w-full px-3 py-1.5 text-sm text-slate-700 rounded-lg hover:bg-slate-100"
                    >
                      <span className="w-3.5 h-3.5 mr-2 rounded-sm bg-slate-200" />
                      {item}
                    </button>
                  ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200/60 px-3 py-2 text-xs text-slate-500 bg-slate-50">
            Press <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-200 font-mono text-[10px] mx-1">↵</kbd> to search
          </div>
        </div>
      )}
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};