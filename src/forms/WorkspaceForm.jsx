import { useState } from "react";
import PropTypes from 'prop-types';

export default function WorkspaceForm({ setWform, handleCreate }) {
  // State for managing workspace name and tags input
  const [name, setName] = useState("");
  const [tags, setTags] = useState("");

  // Handles form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevents default form submission behavior
    setWform(false); // Closes the form modal
    handleCreate(
      name, // Passes the workspace name
      tags.split(",") // Splits tags by commas and passes them as an array
    );
    setName(""); // Resets the workspace name input
    setTags(""); // Resets the tags input
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-[#00000021]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white rounded-lg shadow p-6 flex flex-col gap-4"
      >
        {/* Form Title */}
        <h1 className="text-4xl text-indigo-950 text-center font-bold underline m-1.5">
          Create WorkSpace
        </h1>

        {/* Workspace Name Input */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ws-name">
            Workspace Name
          </label>
          <input
            id="ws-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)} // Updates name state on input change
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter workspace name"
          />
        </div>

        {/* Workspace Tags Input */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ws-tags">
            Workspace Tags
          </label>
          <input
            id="ws-tags"
            type="text"
            value={tags}
            onChange={e => setTags(e.target.value)} // Updates tags state on input change
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Comma separated tags (e.g. project, design, team)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-2 rounded-lg hover:bg-indigo-500 transition cursor-pointer"
        >
          Create Workspace
        </button>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setWform(false)} // Closes the form modal
          className="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
          Close
        </button>
      </form>
    </div>
  );
}

// PropTypes validation to ensure correct props are passed
WorkspaceForm.propTypes = {
  setWform: PropTypes.func.isRequired, // Validates that `setWform` is a required function
  handleCreate: PropTypes.func.isRequired, // Validates that `handleCreate` is a required function
};