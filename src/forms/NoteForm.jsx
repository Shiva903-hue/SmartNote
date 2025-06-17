import { useState } from "react";
import PropTypes from "prop-types";
import { X, Plus } from "lucide-react"; // Assuming you're using lucide-react

export default function NoteForm({ setNote }) {
  const [name, setName] = useState("");
  const [workSpaceName, setWorkSpaceName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setNote(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
        onClick={() => setNote(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-auto transform scale-100 transition-all">
        <form
          onSubmit={handleSubmit}
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-200/60">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-slate-900">
                Create New Note
              </h1>
              <button
                type="button"
                onClick={() => setNote(false)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="px-6 py-4 space-y-4">
            {/* Note Name Input */}
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="note-name"
              >
                Note Name
              </label>
              <div className="relative">
                <input
                  id="note-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl 
                           text-slate-900 text-sm placeholder:text-slate-400
                           focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900/20
                           transition-all duration-200"
                  placeholder="Enter a name for your note..."
                />
              </div>
            </div>

            {/* Description Input */}
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="note-description"
              >
                Description
              </label>
              <div className="relative">
                <textarea
                  id="note-description"
                  value={workSpaceName}
                  onChange={(e) => setWorkSpaceName(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl  text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900/20 transition-all duration-200 resize-none"
                  placeholder="Add a description for your note..."
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-200/60">
            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
              <button
                type="button"
                onClick={() => setNote(false)}
                className="w-full sm:w-auto px-4 py-2.5 inline-flex justify-center items-center text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 focus:outline-none focus:ring-2  focus:ring-slate-900/10 focus:border-slate-900/20 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2.5 inline-flex justify-center items-center gap-2
                      text-sm font-medium text-white bg-slate-900 
                      rounded-xl hover:bg-slate-800 focus:outline-none focus:ring-2 
                        focus:ring-slate-900/20 focus:bg-slate-800
                      transition-all duration-200"
              >
                <Plus className="w-4 h-4" />
                Create Note
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

NoteForm.propTypes = {
  setNote: PropTypes.func.isRequired,
};
