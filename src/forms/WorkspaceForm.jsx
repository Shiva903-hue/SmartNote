import { useState } from "react";
import PropTypes from 'prop-types';

export default function WorkspaceForm({setWform , handleCreate  }) {
  const [name, setName] = useState("");
  const [tags, setTags] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setWform(false);
    handleCreate(
      name,
      tags.split(",")
    );
    setName("");
    setTags("");
  }

  return (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-[#00000021]">
    <form
      onSubmit={handleSubmit}
      className="w-full   max-w-md mx-auto bg-white rounded-lg shadow p-6 flex flex-col gap-4"
    >
      <h1 className="text-4xl text-indigo-950 text-center font-bold underline m-1.5">Create WorkSpace</h1>
      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="ws-name">
          Workspace Name
        </label>
        <input
          id="ws-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter workspace name"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="ws-tags">
          Workspace Tags
        </label>
        <input
          id="ws-tags"
          type="text"
          value={tags}
          onChange={e => setTags(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Comma separated tags (e.g. project, design, team)"
        />
      </div>
      <button
        type="submit" 
        className="w-full bg-indigo-600 text-white font-bold py-2 rounded-lg hover:bg-indigo-500 transition cursor-pointer"
      >
        Create Workspace
      </button>
      <button
        type="button"  onClick={()=>(setWform(false))}
        className="w-full bg-red-500 text-white font-bold py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
      >
       Close
      </button>
    </form>
    </div>
  );

}

WorkspaceForm.propTypes = {
  setWform: PropTypes.func.isRequired,
  // setNewTitle: PropTypes.func.isRequired,
  // newTitle: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}